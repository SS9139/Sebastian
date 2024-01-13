import { Experience } from '@/components/Experience'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { Title } from '@/components/Title'
import { Location, Available, Code } from '@/components/icons'
import { Briefcase } from '@/components/icons/Briefcase'
import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <section>
        <article class='flex flex-col items-start justify-start pt-44'>
          <h1 class='text-5xl font-bold'>Hey, Soy Sebastián García</h1>
          <p class='text-secondary pt-4 pb-5'>Desarrollador de software</p>
          <p class='text-secondary text-base text-balance'>
            +2 Años de experiencia.{' '}
            <b class='text-tertiary'>De Colombia, Cesar.</b> Amante de la
            infraestructura que mejoran la experiencia del desarrollador.
          </p>
        </article>
        <article class='pt-6 flex gap-8 items-center'>
          <p class='flex items-center gap-2 text-secondary'>
            <Location />
            Cesar, Valledupar
          </p>
          <p class='flex items-center gap-0.5 text-secondary'>
            <Available />
            Disponible para trabajar
          </p>
        </article>
      </section>
      <Header />
      <section class='pt-28'>
        <Title>
          <Briefcase class='size-8' />
          Experiencia laboral
        </Title>
        <Experience />
      </section>

      <section id='projects' class='pt-28'>
        <Title>
          <Code class='size-8' />
          Proyectos
        </Title>
        <Projects />
      </section>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Sebastian Garcia',
  meta: [
    {
      name: 'Sobre mi',
      content:
        'Desarrollador de software, entusiasta del open source y la infraestructura del software',
    },
  ],
}
