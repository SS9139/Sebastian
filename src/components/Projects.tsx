import { component$ } from '@builder.io/qwik'
import { Nextjs, Tailwind } from './icons'

export const Projects = component$(() => {
  const TAGS = {
    NEXT: {
      name: 'Next.js',
      class: 'bg-black text-white',
      icon: Nextjs,
    },
    TAILWIND: {
      name: 'Tailwind CSS',
      class: 'bg-[#003159] text-white',
      icon: Tailwind,
    },
  }
  const PROJECTS = [
    {
      title: 'Merch - Comercio para comprar el accesorio de tu mascota',
      description: 'Creado desde cero con Next.js, Supabase y Tailwind CSS.',
      link: 'https://petmerch.vercel.app/',
      github: 'https://github.com/seb-24/merch',
      image: '/webp/merch.webp',
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    },
  ]
  return (
    <>
      {PROJECTS.map(({ image, title, description, tags }) => (
        <article>
          <h3 class='text-2xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>
            {title}
          </h3>
          <p class='text-lg mb-4 text-pretty'>{description}</p>
          <ul class='flex gap-x-2 flex-row mb-2'>
            {tags.map((tag) => (
              <li>
                <span
                  class={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 border border-white/10`}
                >
                  <tag.icon />
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>
          <img
            loading='lazy'
            class='rounded shadow-2xl shadow-white/10 object-cover aspect-video'
            src={image}
            alt={`Captura de pantalla del proyecto ${image}`}
          />
        </article>
      ))}
    </>
  )
})
