import { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function PrecoIdeal() {
    const [inputs, setInputs] = useState({ custoFixo: '', margemLucro: '', assinantes: '' });
    const [preco, setPreco] = useState(null);
    const [dadosSimulados, setDadosSimulados] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const calcularPreco = async () => {
        if (!inputs.custoFixo || !inputs.margemLucro || !inputs.assinantes) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/calcular', inputs);
            setPreco(response.data.precoIdeal);

            const precoIdeal = response.data.precoIdeal;
            // Salva o preço ideal no Local Storage
            localStorage.setItem('precoIdeal', precoIdeal);
            localStorage.setItem('custo', inputs.custoFixo);

            const simulados = Array.from({ length: 10 }, (_, i) => {
                const assinantesAtuais = Number(inputs.assinantes) * (i + 1);
                const precoAtual = (inputs.custoFixo / assinantesAtuais) * (1 + inputs.margemLucro / 100);
                const totalGanho = assinantesAtuais * precoIdeal;
                return {
                    assinantes: assinantesAtuais,
                    preco: precoAtual,
                    totalGanho,
                };
            });

            setDadosSimulados(simulados);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const precoIdeal = localStorage.getItem('precoIdeal') || 'N/A';
            const custoFixo = localStorage.getItem('custo') || 'N/A';
            return (
                <div className="bg-white text-gray-800 shadow-lg rounded-lg p-3 border border-gray-200">
                    <p className="text-sm font-semibold">{`👥 Assinantes: ${payload[0].payload.assinantes}`}</p>
                    <p className="text-sm text-green-600">{`🏷️ Preço Ideal: ${precoIdeal} MZN`}</p>
                    <p className="text-sm text-red-600">{`⚙️ Custo Fixo: ${custoFixo} MZN`}</p>
                    <p className="text-sm text-green-600">{`💵 Total Ganho: ${payload[0].payload.totalGanho.toFixed(2)} MZN`}</p>
                    <p className="text-sm text-blue-600">{`💰 Preço Atual: ${payload[0].payload.preco.toFixed(2)} MZN`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Calculadora de Preço por Assinatura</h1>

            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <input
                    name="custoFixo"
                    type="number"
                    placeholder="Custo Fixo"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    name="margemLucro"
                    type="number"
                    placeholder="Margem de Lucro (%)"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    name="assinantes"
                    type="number"
                    placeholder="Número de Assinantes"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={calcularPreco}
                    className={`w-full py-3 px-4 rounded-md ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                    disabled={loading}
                >
                    {loading ? 'Calculando...' : 'Calcular'}
                </button>
            </div>

            {preco && <h2 className="mt-6 text-2xl font-semibold text-gray-800">Preço Ideal: {preco} MZN</h2>}

            {dadosSimulados.length > 0 ? (
                <div className="mt-8 w-full max-w-4xl">
                    <ResponsiveContainer height={300}>
                        <LineChart data={dadosSimulados}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="assinantes" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="preco" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <p className="mt-6 text-xl font-semibold text-red-700">Nenhum dado disponível para o gráfico.</p>
            )}
        </div>
    );
}

export default PrecoIdeal;
