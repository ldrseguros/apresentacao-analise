import React from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Shield,
  Search,
  FileSearch,
  FileCheck,
  LineChart,
  Award,
  CheckCircle2,
  Clock,
  Users,
  Mail,
  Phone,
  Layout,
} from "lucide-react";
import Logo from "@/components/Logo";
import ProfilePhoto from "@/components/ProfilePhoto";
import SlideContent from "@/components/SlideContent";
import SlideTitle from "@/components/SlideTitle";
import SlideText from "@/components/SlideText";
import SlideList from "@/components/SlideList";
import SlideIcon from "@/components/SlideIcon";
import SlideConnector from "@/components/SlideConnector";
import IconBox from "@/components/IconBox";
import { Button } from "@/components/ui/button";

// Define ArrowDown component
const ArrowDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 5v14"></path>
    <path d="m19 12-7 7-7-7"></path>
  </svg>
);

export const slides = [
  {
    id: 1,
    title:
      "Sua Segurança Real: Desvendando o Valor da Análise Técnica no Seu Seguro",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-4">
        <Logo type="ldr" className="mb-6 sm:mb-8" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 text-center text-white leading-tight">
          Sua Segurança Real
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 sm:mb-12 text-center text-white opacity-90 px-2">
          Desvendando o Valor da Análise Técnica no Seu Seguro
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
          <ProfilePhoto
            image="/lovable-uploads/319586b9-9cc9-43e8-bde8-0c002135d72d.png"
            size="md"
          />
          <div className="text-center sm:text-left text-white">
            <p className="text-lg sm:text-xl font-medium">Gustavo Mariano</p>
            <p className="text-xs sm:text-sm opacity-80">
              Especialista em Análise de Riscos
            </p>
          </div>
        </div>
      </div>
    ),
    background: "bg-gradient-to-br from-brand-blue to-brand-darkblue",
  },
  {
    id: 2,
    title: "Você se Sente Totalmente Protegido?",
    content: (
      <SlideContent>
        <SlideTitle>Você se Sente Totalmente Protegido?</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <SlideText delay={200}>O seguro é um passo importante.</SlideText>
            <SlideText delay={400} className="font-medium text-lg sm:text-xl">
              Mas... ele realmente cobre tudo o que pode te afetar?
            </SlideText>
            <SlideText delay={600}>
              Você conhece cada detalhe das Condições Gerais?
            </SlideText>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <SlideIcon
              icon={AlertTriangle}
              size="xl"
              className="text-brand-yellow"
            />
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 3,
    title: "O Risco Existe... E Evolui.",
    content: (
      <SlideContent>
        <SlideTitle>O Risco Existe... E Evolui.</SlideTitle>
        <SlideText>Imprevistos fazem parte da vida e dos negócios.</SlideText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6 mt-6 sm:mt-8">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
              <FileSearch className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg">
                Processos judiciais
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Ações que podem comprometer seu patrimônio
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg">
                Falhas operacionais
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Erros que impactam seus clientes e negócios
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg">
                Danos materiais/cibernéticos
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Perdas físicas e digitais cada vez mais frequentes
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg">
                Imprevistos contratuais
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Cláusulas com responsabilidades ocultas
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 4,
    title: "A Lacuna Invisível na Proteção Comum",
    content: (
      <SlideContent>
        <SlideTitle>A Lacuna Invisível na Proteção Comum</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <SlideList
              items={[
                "Comprar seguro focado só no preço.",
                "Não considerar riscos específicos da operação/atividade.",
                "Não cruzar com obrigações de outros contratos do cliente.",
                "Resultado: Falsa sensação de segurança.",
              ]}
              iconType="number"
            />
          </div>
          <div className="relative mt-6 md:mt-0">
            <div className="rounded-xl bg-gray-100 p-4 sm:p-6 relative z-10">
              <div className="text-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-semibold">
                  Riscos Reais
                </span>
              </div>
              <SlideConnector direction="horizontal" style="arrow" />
              <div className="text-center my-3 sm:my-4">
                <span className="text-lg sm:text-xl font-semibold">
                  Seguro Padrão
                </span>
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-100 border-2 border-brand-yellow rounded-lg animate-pulse">
                <div className="text-center text-red-500 font-bold text-sm sm:text-base">
                  LACUNA DE PROTEÇÃO
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 bg-brand-yellow opacity-20 rounded-full -z-10"></div>
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 bg-brand-blue opacity-10 rounded-full -z-10"></div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 5,
    title: "Nossa Análise: Construindo a Sua Blindagem Única",
    content: (
      <SlideContent>
        <SlideTitle>
          Nossa Análise: Construindo a Sua Blindagem Única
        </SlideTitle>
        <div className="mb-6">
          <SlideText>
            Não vendemos apólices prontas. Realizamos um Diagnóstico de Riscos e
            Contratos.
          </SlideText>
        </div>
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="flex-1 bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
            <div className="text-center mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-blue inline-flex items-center justify-center mb-2">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-medium text-sm sm:text-base">
                1. Entender Sua Operação
              </h3>
            </div>
          </div>
          <div className="hidden md:block">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue mt-6 sm:mt-8" />
          </div>
          <div className="md:hidden mx-auto">
            <ArrowDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue my-1 sm:my-2" />
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
            <div className="text-center mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-blue inline-flex items-center justify-center mb-2">
                <FileSearch className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-medium text-sm sm:text-base">
                2. Analisar Seus Contratos
              </h3>
            </div>
          </div>
          <div className="hidden md:block">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue mt-6 sm:mt-8" />
          </div>
          <div className="md:hidden mx-auto">
            <ArrowDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue my-1 sm:my-2" />
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
            <div className="text-center mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-yellow inline-flex items-center justify-center mb-2">
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" />
              </div>
              <h3 className="font-medium text-sm sm:text-base">
                3. Cruzar com Condições Gerais do Seguro
              </h3>
            </div>
          </div>
          <div className="hidden md:block">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue mt-6 sm:mt-8" />
          </div>
          <div className="md:hidden mx-auto">
            <ArrowDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue my-1 sm:my-2" />
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
            <div className="text-center mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-blue inline-flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-medium text-sm sm:text-base">
                4. Oferecer Soluções Personalizadas
              </h3>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 6,
    title: 'A "Letra Miúda" Que Revelamos (Evidência Visual)',
    content: (
      <SlideContent>
        <SlideTitle>A "Letra Miúda" Que Revelamos</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 relative">
            <h3 className="font-bold mb-3 text-brand-blue">
              Contrato Cliente/Operação
            </h3>
            <div className="h-40 overflow-y-auto text-sm bg-white p-3 border border-gray-300 font-mono">
              <p className="mb-2">
                <span className="font-bold">Cláusula 8.3:</span> O CONTRATADO
                assume integral responsabilidade por todos e quaisquer danos,
                diretos ou indiretos, que vier a causar à CONTRATANTE ou a
                terceiros...
              </p>
              <p className="mb-2">
                <span className="text-red-500 font-bold bg-yellow-100 px-1">
                  incluindo responsabilidade civil profissional por erros e
                  omissões,
                </span>{" "}
                decorrentes da execução deste Contrato...
              </p>
              <p className="mb-2">
                ...devendo ressarcir à CONTRATANTE quaisquer valores que esta
                venha a desembolsar em virtude de condenações...
              </p>
            </div>
            <div className="absolute -right-4 top-1/2 md:top-1/3 transform translate-x-0 -translate-y-1/2 z-10 hidden md:block">
              <Search className="w-12 h-12 text-brand-yellow drop-shadow-md" />
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold mb-3 text-brand-blue">
              Condição Geral do Seguro - Exclusão
            </h3>
            <div className="h-40 overflow-y-auto text-sm bg-white p-3 border border-gray-300 font-mono">
              <p className="mb-2">
                <span className="font-bold">Cláusula 5.1:</span> Não estão
                cobertos por esta apólice...
              </p>
              <p className="mb-2">
                f) Reclamações decorrentes de responsabilidades assumidas pelo
                Segurado por contratos, acordos, promessas e garantias,{" "}
                <span className="text-red-500 font-bold bg-yellow-100 px-1">
                  escritas ou verbais, compromissos aceitos, exceto se tais
                  responsabilidades fossem existentes para o Segurado mesmo na
                  ausência de tais acordos, promessas ou garantias;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-yellow-100 p-4 rounded-lg border-l-4 border-red-500 animate-pulse">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <p className="font-bold text-lg">
              O Risco de Descobertura está aqui!
            </p>
          </div>
          <p className="mt-2">
            O cliente só descobriria isso na hora do sinistro, quando já seria
            tarde demais.
          </p>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 7,
    title: "Resultados: Ampliando Sua Margem de Segurança",
    content: (
      <SlideContent>
        <SlideTitle>Resultados: Ampliando Sua Margem de Segurança</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <IconBox
            icon={CheckCircle2}
            title="Correção de apólices inadequadas"
            description="Adequamos suas coberturas à sua realidade específica"
          />
          <IconBox
            icon={Search}
            title="Identificação de riscos não mapeados"
            description="Descobrimos vulnerabilidades que passariam despercebidas"
          />
          <IconBox
            icon={Shield}
            title="Mais segurança e tranquilidade"
            description="Garantimos que você estará protegido quando mais precisar"
          />
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-medium text-center mb-4">
            Nível de Segurança
          </h3>
          <div className="relative h-20">
            <div className="absolute w-full h-6 bg-gray-200 rounded-lg"></div>
            <div className="absolute w-1/3 h-6 bg-red-400 rounded-l-lg">
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm">
                Antes
              </span>
            </div>
            <div className="absolute w-full h-6 bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 rounded-lg opacity-60"></div>
            <div
              className="absolute w-4/5 h-6 bg-green-500 rounded-l-lg"
              style={{ left: "25%", borderRadius: "6px" }}
            >
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm">
                Depois
              </span>
            </div>
            <div className="absolute top-10 left-0 right-0 flex justify-between">
              <span>Risco Alto</span>
              <span>Segurança Ideal</span>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 8,
    title: "Produtos Chave na Lente da Análise",
    content: (
      <SlideContent>
        <SlideTitle>Produtos Chave na Lente da Análise</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-blue flex items-center justify-center">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-brand-blue leading-tight">
              Responsabilidade Civil Profissional (RCP)
            </h3>
            <p className="text-gray-600 mb-4 text-center text-sm sm:text-base">
              Cobertura alinhada aos seus serviços e contratos com seus
              clientes.
            </p>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
              <span className="bg-brand-blue bg-opacity-10 text-brand-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                Erros e Omissões
              </span>
              <span className="bg-brand-blue bg-opacity-10 text-brand-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                Danos a Terceiros
              </span>
              <span className="bg-brand-blue bg-opacity-10 text-brand-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                Defesa Jurídica
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-blue flex items-center justify-center">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-brand-blue">
              Seguro Empresarial
            </h3>
            <p className="text-gray-600 mb-4 text-center text-sm sm:text-base">
              Proteção do seu negócio considerando sua operação, patrimônio e
              responsabilidades contratuais/legais.
            </p>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
              <span className="bg-brand-blue bg-opacity-10 text-brand-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                Patrimônio
              </span>
              <span className="bg-brand-blue bg-opacity-10 text-brand-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                Lucros Cessantes
              </span>
              <span className="bg-brand-blue bg-opacity-10 text-brand-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                RC Operações
              </span>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 9,
    title: "Case de Sucesso: Segurança Comprovada na Prática",
    content: (
      <SlideContent>
        <SlideTitle>
          Case de Sucesso: Segurança Comprovada na Prática
        </SlideTitle>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md border border-gray-200">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-brand-blue">
            Empresa de Tecnologia - Prestação de Serviços
          </h3>

          <div className="relative">
            <div className="ml-6 sm:ml-8 border-l-2 border-brand-blue pl-4 sm:pl-6 py-1">
              <h4 className="font-medium text-sm sm:text-base">
                Situação Inicial
              </h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                Cliente tinha seguro básico, sem considerar as exigências
                contratuais dos clientes
              </p>
            </div>
            <div className="absolute left-0 top-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                1
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="ml-6 sm:ml-8 border-l-2 border-brand-blue pl-4 sm:pl-6 py-1">
              <h4 className="font-medium text-sm sm:text-base">
                Nossa Análise Revelou
              </h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                Cláusulas de responsabilidade civil nos contratos exigiam
                coberturas específicas ausentes na apólice
              </p>
            </div>
            <div className="absolute left-0 top-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                2
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="ml-6 sm:ml-8 border-l-2 border-brand-blue pl-4 sm:pl-6 py-1">
              <h4 className="font-medium text-sm sm:text-base">
                Ação Implementada
              </h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                Contratação de RC Profissional com cláusulas específicas para
                atender exigências contratuais
              </p>
            </div>
            <div className="absolute left-0 top-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                3
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="ml-6 sm:ml-8 pl-4 sm:pl-6 py-1">
              <h4 className="font-medium text-sm sm:text-base">Resultado</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                3 meses depois, um erro no software causou prejuízo ao cliente.
                A indenização de R$ 180.000 foi integralmente coberta pela
                seguradora.
              </p>
            </div>
            <div className="absolute left-0 top-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-yellow text-brand-blue flex items-center justify-center font-bold text-xs sm:text-sm">
                ✓
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-50 border-l-4 border-green-500 rounded">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
            <span className="font-bold text-sm sm:text-base">
              Economia para o cliente: R$ 180.000
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm">
            Sem a análise, o sinistro teria sido negado e o cliente arcaria com
            todo o prejuízo.
          </p>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 10,
    title: "A Análise Técnica: O Alicerce da Sua Proteção",
    content: (
      <SlideContent>
        <SlideTitle>A Análise Técnica: O Alicerce da Sua Proteção</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <SlideText>
              Seguro não é apenas um produto ou um custo. É uma estratégia
              essencial de proteção para seu futuro e patrimônio.
            </SlideText>
            <SlideText delay={200}>
              A simples contratação não garante blindagem. É a análise técnica
              detalhada que transforma a apólice em uma ferramenta de segurança
              efetiva.
            </SlideText>
            <SlideText delay={400} className="font-medium">
              Esta análise é a nossa especialidade. Mergulhamos fundo para
              garantir sua tranquilidade real.
            </SlideText>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-brand-blue rounded-lg rotate-3 absolute top-2 left-2 opacity-30"></div>
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-6 relative z-10">
                <div className="text-center">
                  <Shield className="w-16 h-16 mx-auto text-brand-blue mb-2" />
                  <h3 className="text-xl font-bold text-brand-blue">
                    Proteção Completa
                  </h3>
                  <div className="flex flex-col gap-1 mt-4">
                    <div className="flex items-center gap-2">
                      <Search className="w-5 h-5 text-brand-yellow" />
                      <p className="text-sm">Análise</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-brand-yellow" />
                      <p className="text-sm">Cobertura</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                      <p className="text-sm">Tranquilidade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-gray-50 p-4 rounded-lg border-l-4 border-brand-blue">
          <p className="text-center font-medium text-brand-blue">
            "Nossa especialidade é garantir que não haja pontos cegos. Ir fundo
            onde poucos vão para que você tenha a certeza de uma proteção que
            realmente funciona."
          </p>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 11,
    title: "Pronto Para Blindar Seu Futuro?",
    content: (
      <SlideContent>
        <SlideTitle className="mt-4">
          Pronto Para Blindar Seu Futuro?
        </SlideTitle>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-start lg:items-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 lg:mb-8">
            <ProfilePhoto
              image="/lovable-uploads/8c243293-1d1c-418a-914a-7e92c30a6b51.png"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
              size="sm"
            />
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-col gap-1 sm:gap-2 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-blue">
                  Gustavo Mariano
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Especialista em Análise de Riscos
                </p>
              </div>
              <SlideList
                className="text-xs sm:text-sm"
                items={[
                  "Não espere o imprevisto chegar.",
                  "Dê o próximo passo: Agende sua Análise de Riscos e Contratos.",
                  "Descubra as lacunas não vistas e amplie sua proteção.",
                ]}
                iconType="check"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-sm w-full lg:max-w-md">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-brand-blue">
              Agende Sua Análise
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div
                className="flex items-center gap-2 sm:gap-3 animate-slide-in"
                style={{ animationDelay: "200ms" }}
              >
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow flex-shrink-0" />
                <p className="text-xs sm:text-sm">
                  Duração: Aproximadamente 1 hora
                </p>
              </div>
              <div
                className="flex items-center gap-2 sm:gap-3 animate-slide-in"
                style={{ animationDelay: "400ms" }}
              >
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow flex-shrink-0" />
                <p className="text-xs sm:text-sm">
                  Participantes: Você e nosso especialista
                </p>
              </div>
              <div
                className="flex items-center gap-2 sm:gap-3 animate-slide-in"
                style={{ animationDelay: "600ms" }}
              >
                <FileSearch className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow flex-shrink-0" />
                <p className="text-xs sm:text-sm">
                  Traga: Contratos e apólices atuais (se tiver)
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-base">
                <a href="https://wa.me/5562996920050">Agendar Minha Análise</a>
              </Button>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    id: 12,
    title: "Contato",
    content: (
      <SlideContent>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-10">
            Contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="flex flex-col items-center">
              <ProfilePhoto
                image="/lovable-uploads/319586b9-9cc9-43e8-bde8-0c002135d72d.png"
                className="mb-4 w-2/5 h-2/5"
              />
              <h3 className="text-xl font-semibold">Gustavo Mariano</h3>
              <p className="text-gray-600 mb-4">
                Especialista em Análise de Riscos
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-brand-blue" />
                <div>
                  <p className="font-medium">Telefone/WhatsApp</p>
                  <a
                    href="https://wa.me/5562996920050"
                    className="text-gray-600 hover:text-brand-gold"
                  >
                    (62) 99692-0050
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-brand-blue" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <a
                    href="mailto:gustavo@ldrseguros.com.br"
                    className="text-gray-600 hover:text-brand-gold"
                  >
                    gustavo@ldrseguros.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Layout className="w-6 h-6 text-brand-blue" />
                <div>
                  <p className="font-medium">Website</p>
                  <a
                    href="https://www.ldrseguros.com.br"
                    className="text-gray-600 hover:text-brand-gold"
                  >
                    www.ldrseguros.com.br
                  </a>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Obrigado pela sua atenção!</p>
                <p className="text-brand-blue font-medium mt-2">
                  Vamos construir sua segurança real juntos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
];
