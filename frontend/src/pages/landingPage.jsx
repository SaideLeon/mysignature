import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // Importando Link do React Router

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controle do menu responsivo

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans bg-gradient-to-br from-purple-600 via-blue-700 to-gray-800 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logotipo */}
          <img src="./image.png" alt="Logotipo" className="h-10 w-auto" />

          {/* Ícone do menu em telas menores */}
          <div className="lg:hidden">
            {menuOpen ? (
              <FiX
                className="text-3xl cursor-pointer hover:text-yellow-300"
                onClick={toggleMenu}
              />
            ) : (
              <FiMenu
                className="text-3xl cursor-pointer hover:text-yellow-300"
                onClick={toggleMenu}
              />
            )}
          </div>

          {/* Menu */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6 text-lg`}
          >
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-center">
              <li>
                <Link
                  className="hover:text-yellow-300 transition duration-300"
                  to="#about"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300 transition duration-300"
                  to="#features"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300 transition duration-300"
                  to="/calc"
                >
                  Calcular
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Seção Principal */}
      <main className="text-white text-center mt-20 px-4 bg-gradient-to-b from-blue-700 to-indigo-800">
        <h1 className="text-4xl font-bold mb-4">
          Bem-vindo ao <span className="text-yellow-300">MySignature</span>
        </h1>
        <p className="text-lg mb-8">
          Descubra o preço ideal para suas assinaturas de maneira simples, rápida e eficiente.
        </p>
      </main>

      {/* Seção Explicativa */}
      <section id="about" className="bg-gray-700 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Para que serve o programa?</h2>
          <p className="text-lg leading-relaxed mb-6">
            O <span className="text-yellow-300 font-bold">MySignature</span> é uma ferramenta projetada para calcular o preço ideal de assinaturas
            com base em custos fixos, margem de lucro desejada e número de assinantes esperados.
          </p>
        </div>
      </section>

      {/* Nova Seção - Quem pode se beneficiar? */}
      <section id="beneficiaries" className="bg-blue-700 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Quem pode se beneficiar?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Empresas e profissionais dos seguintes setores podem aproveitar o <span className="font-bold">MySignature</span> para otimizar seus cálculos e melhorar suas receitas:
          </p>
          <ul className="text-left list-disc mx-auto mt-4 space-y-2 max-w-lg">
            <li>Plataformas de Streaming (vídeo, música, etc.)</li>
            <li>Serviços de Assinatura Mensal (clubes de produtos)</li>
            <li>Educação Online (cursos e treinamentos)</li>
            <li>Softwares SaaS (Software as a Service)</li>
            <li>Consultorias e serviços personalizados</li>
            <li>Pequenas e médias empresas buscando otimizar suas receitas</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
