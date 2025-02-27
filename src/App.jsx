import { Header } from "./components/Header"
import { Section } from "./components/Section"
import { TimelineItem } from "./components/TimelineItem"


function App() {
  return (
    <div className="App">
      <Header 
       email={"johnDoe@example.com"}
       phone={"+55 11 1234-5678"}
       social={"https://github.com/lucasrvcintra"}
       photoUrl={"https://avatars.githubusercontent.com/u/100200114?v=4"}
       name={"John Doe"}
      />
    <Section title={"Resumo"}>
        <p className="text-left pl-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto optio eum ducimus saepe sed tenetur quos possimus veniam corrupti alias doloribus a, totam blanditiis illo! Quam aliquid vero molestias eos deserunt a accusamus odio non ea odit. Cupiditate nam dolorem libero vel doloribus exercitationem maxime, dicta, veniam tempora, ipsum ullam molestias perspiciatis! Nam voluptatibus quam minima facilis molestias maiores dolore hic quisquam ipsum saepe maxime reprehenderit fuga, iste dicta consequatur eaque doloribus deleniti nemo!</p>
    </Section>
    
    <Section title={"Experiência Profissional"}>
          <TimelineItem 
            date="Jan 2025 - atual" 
            title="Curso de React" 
            items={[
              "Curso de React",
              "Curso de Node.js",
              "Curso de Express.js",
              "Curso de Typescript"
            ]}
          />
    </Section>
    
    <Section title={"Formação Acadêmica"}>
        <TimelineItem date={"2020 - 2024"} title={"Curso de React"}></TimelineItem>
    </Section>
    
    <Section title={"Competências e Habilidades"}>
        <TimelineItem 
          items={[
            "Curso de React",
            "Curso de Node.js",
            "Curso de Express.js",
            "Curso de React",
            "Curso de Node.js",
            "Curso de Express.js"
          ]}
        />
    </Section>

    <Section title={"Informações Adicionais"}>
      <TimelineItem items={[
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto optio eum ducimus saepe sed tenetur quos possimus veniam corrupti alias doloribus a, totam blanditiis illo! Quam aliquid vero molestias eos deserunt a accusamus odio non ea odit. ",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ]}/>
    </Section>
    </div>
  )
}

export default App
