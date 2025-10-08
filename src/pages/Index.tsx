import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cpu, Zap, Users, Brain, Sparkles, Bot, CircuitBoard, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed inset-0 bg-holographic pointer-events-none" />
      
      {/* Floating Orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float animation-delay-2000 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto">
          {/* Logo */}
          <div className="mb-16 flex items-center gap-4 animate-fade-in-up">
            <div className="w-16 h-16 border-2 border-primary flex items-center justify-center bg-primary/10 backdrop-blur-sm animate-pulse-glow">
              <span className="text-primary font-bold text-2xl">WR</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-wider text-primary">WAR ROOM</h2>
              <p className="text-xs tracking-widest text-muted-foreground font-mono">DA AUTOMAÇÃO</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                A PRIMEIRA{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SALA DE ANÁLISE DE AUTOMAÇÕES
                </span>{" "}
                DO BRASIL
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Toda quarta às 19h, <span className="text-primary font-semibold">Lucas Villela e João Marcos</span> analisam seu caso ao vivo. Acabe com semanas travado no mesmo problema.
              </p>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-bold px-12 py-6 text-lg border-2 border-primary/50 shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:shadow-[0_0_50px_rgba(0,255,255,0.7)] transition-all duration-300 animate-glow"
              >
                <Zap className="mr-2 h-6 w-6" />
                QUERO PARTICIPAR
              </Button>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-6 border-2 border-primary/30 px-6 py-4 bg-card/50 backdrop-blur-sm scan-line">
                <div className="text-sm font-mono">
                  <p className="text-muted-foreground text-xs">OPERATION:</p>
                  <p className="font-bold text-primary">WAR ROOM DA AUTOMAÇÃO</p>
                </div>
                <div className="text-sm font-mono">
                  <p className="text-muted-foreground text-xs">STATUS:</p>
                  <p className="text-primary font-bold animate-pulse-glow flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    ACTIVE
                  </p>
                </div>
              </div>
            </div>

            {/* Video Placeholder with Futuristic Design */}
            <div className="relative group animate-fade-in-up animation-delay-400">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
              <div className="relative aspect-video border-2 border-primary/50 bg-card/50 backdrop-blur-sm flex items-center justify-center group-hover:border-primary transition-all duration-300 scan-line">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform">
                    <Bot className="w-10 h-10 text-background" />
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">Vídeo de apresentação</p>
                </div>
              </div>
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Advanced Styling */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="text-primary">Por Que Você Fica Travado</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Não É Falta de Conhecimento
              </span>
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                <p className="font-semibold text-primary text-xl mb-4">Você já percebeu?</p>
                <div className="space-y-4 text-muted-foreground">
                  <p>Passa horas tentando resolver um problema de automação que deveria levar minutos.</p>
                  <p>Assiste dezenas de vídeos no YouTube.</p>
                  <p>Consulta a IA várias vezes.</p>
                  <p className="text-xl font-bold text-foreground">E continua no mesmo lugar.</p>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/50 hover:border-primary transition-all duration-300">
                  <CircuitBoard className="w-12 h-12 text-primary mb-4 animate-pulse" />
                  <p className="font-semibold text-primary text-xl mb-3">O problema real não é você não saber.</p>
                  <p className="text-muted-foreground">É você estar sozinho demais para calibrar a dificuldade.</p>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/50 hover:border-accent transition-all duration-300">
                  <Brain className="w-12 h-12 text-accent mb-4 animate-pulse" />
                  <p className="font-semibold text-accent text-xl mb-3">Perde a referência</p>
                  <p className="text-muted-foreground">Não consegue saber se aquele erro de webhook deveria levar 10 minutos ou 10 horas para resolver.</p>
                </Card>
              </div>

              <Card className="p-10 bg-card/80 backdrop-blur-sm border-2 border-primary/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary animate-pulse" />
                <p className="text-center text-xl italic text-muted-foreground mb-4">
                  É como um piloto voando sem torre de controle.
                </p>
                <p className="text-center font-bold text-2xl text-primary">
                  Seus concorrentes com mentores resolvem em minutos o que você leva dias.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-primary text-glow-cyan">///</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PARA QUEM É</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
              <Cpu className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform animate-pulse-glow" />
              <h3 className="text-2xl font-bold text-primary mb-4">Profissionais de Automação Travados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você já criou fluxos no Make ou N8N, mas fica dias empacado em problemas que deveriam ser simples. Precisa de quem já passou por isso para te destravar.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:border-accent transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_40px_rgba(255,0,255,0.3)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
              <Sparkles className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform animate-pulse-glow" />
              <h3 className="text-2xl font-bold text-accent mb-4">Prestadores de Serviço Sobrecarregados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você atende clientes com automação mas se sente inseguro quando surge algo complexo. Quer ter experts ao seu lado para não perder contratos importantes.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
              <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform animate-pulse-glow" />
              <h3 className="text-2xl font-bold text-primary mb-4">Empreendedores Digitais Solitários</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você trabalha sozinho, sem pares do mesmo nível técnico para validar suas ideias. Precisa de uma comunidade séria de praticantes reais, não iniciantes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What is WarRoom Section */}
      <section className="py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-primary text-glow-cyan">///</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">O QUE É O WARROOM</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              { text: "É uma sala de análise de automações.", icon: Bot },
              { text: "Um momento dedicado e exclusivo a olhar suas automações, seus negócios com automação e te dar insights práticos de quem vive disso.", icon: Brain },
              { text: "Por ordem de pergunta, cada pessoa terá 10 minutos da nossa equipe para analisar o seu caso.", icon: Zap },
            ].map((item, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xl leading-relaxed">
                    {item.text.split("insights práticos de quem vive disso")[0]}
                    {item.text.includes("insights práticos") && (
                      <span className="text-primary font-semibold">insights práticos de quem vive disso</span>
                    )}
                    {item.text.split("insights práticos de quem vive disso")[1]}
                    {item.text.split("10 minutos")[0] !== item.text && (
                      <>
                        {item.text.split("10 minutos")[0]}
                        <span className="text-primary font-semibold">10 minutos</span>
                        {item.text.split("10 minutos")[1]}
                      </>
                    )}
                    {item.text.split("sala de análise de automações")[0] !== item.text && (
                      <>
                        {item.text.split("sala de análise de automações")[0]}
                        <span className="text-primary font-semibold">sala de análise de automações</span>
                        {item.text.split("sala de análise de automações")[1]}
                      </>
                    )}
                  </p>
                </div>
              </Card>
            ))}

            <Card className="p-12 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border-2 border-primary backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-holographic opacity-30" />
              <div className="relative">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
                <p className="text-2xl font-bold text-center leading-relaxed">
                  Direcionamento objetivo para encurtar o caminho e te colocar na trilha para faturar com a melhor onda do mercado digital.
                </p>
              </div>
            </Card>
          </div>

          {/* What You Gain Section */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-primary text-glow-cyan">///</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                O QUE VOCÊ GANHA ENTRANDO NA TRINCHEIRA
              </span>
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "RESOLVA EM MINUTOS O QUE LEVARIA SEMANAS",
                  description: "Chega de ficar dias travado no mesmo problema. Lucas e João olham seu caso ao vivo e te mostram exatamente onde está o erro. É como ter dois mecânicos expert olhando seu motor enquanto você dirige.",
                  icon: Zap
                },
                {
                  title: "NUNCA MAIS TRABALHE SOZINHO",
                  description: "Você entra numa sala com outros profissionais sérios que vivem de automação todo dia. Sem iniciante fazendo pergunta boba. Só gente que entende suas dores porque passa pelas mesmas batalhas.",
                  icon: Users
                },
                {
                  title: "APRENDA COM QUEM JÁ FEZ O IMPOSSÍVEL",
                  description: "Cada problema que você traz já foi resolvido por alguém aqui. Você pula todos os erros que a gente já cometeu e vai direto pro que funciona de verdade.",
                  icon: Brain
                },
                {
                  title: "PARE DE PERDER CONTRATOS POR INSEGURANÇA",
                  description: "Quando você sabe que tem expert do seu lado, você aceita aquele projeto grande sem medo. Cobra o valor certo. E entrega com confiança.",
                  icon: Rocket
                }
              ].map((item, index) => (
                <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-transparent animate-pulse" />
                  <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-primary text-glow-cyan">///</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NOSSOS MENTORES
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
              <img src="/Captura de Tela 2025-10-07 às 21.01.00.png" alt="Lucas Villela" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-primary mb-4 text-center">Lucas Villela</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Reconhecido por grandes nomes do mercado como Alfredo Soares, Pedro Sobral, Lucas Renault, Giovanni Saraiva, Thales Laray, Matheus Palma.
              </p>
              <p className="text-muted-foreground leading-relaxed text-center mt-4">
                Possui rápido raciocínio para resolver problemas e já criou o impossível para muitos na automação.
              </p>
              <p className="text-muted-foreground leading-relaxed text-center mt-4">
                Além de viver de automação desde 2014, possui infoprodutos vendendo todos os dias sem gastar 1 real de tráfego, totalizando quase 5 mil vendas nos últimos 12 meses.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:border-accent transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
              <img src="/Captura de Tela 2025-10-07 às 21.00.44.png" alt="João Marcos" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-accent mb-4 text-center">João Marcos</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Famoso nos bastidores, já atendeu grandes agências e grandes players já ouviram falar dele.
              </p>
              <p className="text-muted-foreground leading-relaxed text-center mt-4">
                Aluno prodígio da comunidade que em 2 anos mudou totalmente a sua vida. Braço direito do Lucas Villela caminhando junto com ele com a comunidade e nos maiores contratos que o mercado já viu.
              </p>
              <p className="text-muted-foreground leading-relaxed text-center mt-4">
                Ama o impossível e não poupa esforços para te ajudar a resolver algum problema. Umas das pessoas mais solícitas que o mercado digital já viu.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Receive Section */}
      <section className="py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-primary text-glow-cyan">///</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              O QUE VOCÊ RECEBE
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
              <Zap className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform animate-pulse-glow" />
              <h3 className="text-2xl font-bold text-primary mb-4">Análise Ao Vivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Participe das análises ao vivo e tenha seus problemas resolvidos em tempo real.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:border-accent transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
              <Users className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform animate-pulse-glow" />
              <h3 className="text-2xl font-bold text-accent mb-4">Comunidade Exclusiva</h3>
              <p className="text-muted-foreground leading-relaxed">
                Faça parte de uma comunidade de profissionais de automação de alto nível.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
              <Brain className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform animate-pulse-glow" />
              <h3 className="text-2xl font-bold text-primary mb-4">Conteúdo Exclusivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acesse conteúdos exclusivos e materiais de apoio para aprimorar suas habilidades.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-primary text-glow-cyan">///</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PERGUNTAS FREQUENTES
            </span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
              <h3 className="text-xl font-bold text-primary mb-4">Como funciona o WarRoom?</h3>
              <p className="text-muted-foreground leading-relaxed">
                O WarRoom é uma sala de análise ao vivo onde você pode apresentar seus problemas e receber soluções em tempo real.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:border-accent transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent" />
              <h3 className="text-xl font-bold text-accent mb-4">Quem pode participar?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Profissionais de automação, prestadores de serviço e empreendedores digitais que buscam soluções e insights.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
              <h3 className="text-xl font-bold text-primary mb-4">Como faço para me inscrever?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clique no botão "Quero Participar" e siga as instruções para garantir sua vaga.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            COMUNIDADE DE AUTOMAÇÃO LUCAS VILLELA ® 2025 Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
