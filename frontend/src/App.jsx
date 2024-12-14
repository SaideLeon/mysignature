import { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function App() {
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

            const simulados = Array.from({ length: 10 }, (_, i) => ({
                assinantes: Number(inputs.assinantes) * (i + 1),
                preco: (inputs.custoFixo / (inputs.assinantes * (i + 1))) * (1 + inputs.margemLucro / 100),
            }));
            console.log("Dados Simulados:", simulados);
            setDadosSimulados(simulados);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Calculadora de Preço por Assinatura</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <input
                    name="custoFixo"
                    type="number"
                    placeholder="Custo Fixo"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md shadow-sm mb-4"
                />
                <input
                    name="margemLucro"
                    type="number"
                    placeholder="Margem de Lucro (%)"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md shadow-sm mb-4"
                />
                <input
                    name="assinantes"
                    type="number"
                    placeholder="Número de Assinantes"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md shadow-sm mb-4"
                />
                <button
                    onClick={calcularPreco}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
                    disabled={loading}
                >
                    {loading ? 'Calculando...' : 'Calcular'}
                </button>
            </div>

            {preco && <h2 className="mt-6 text-xl font-semibold text-gray-800">Preço Ideal: R$ {preco}</h2>}

            {dadosSimulados.length > 0 ? (
                <div className="mt-8 w-full max-w-4xl">
                    <ResponsiveContainer height={300}>
                        <LineChart data={dadosSimulados}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="assinantes" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="preco" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <p className="mt-6 text-xl font-semibold text-red-700">Nenhum dado disponível para o gráfico.</p>
            )}
        </div>
    );
}3

export default App;

