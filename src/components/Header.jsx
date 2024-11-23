const ClockIcon = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
)

const StackIcon = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-stack-middle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 10l4 -2l-8 -4l-8 4l4 2" /><path d="M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" /><path d="M8 14l-4 2l8 4l8 -4l-4 -2" /></svg>
)

const InfoIcon = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
)

const EditIcon = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-pencil-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /><path d="M16 19h6" /></svg>
)

const CalendarIcon = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M11 15h1" /><path d="M12 15v3" /></svg>
)

const CommentIcon = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>
)

const TagIcon = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
)

const EducationIcon = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
)

const list = [
    {
        title: 'Detalle',
        icon: <EditIcon/>
    },
    {
        title: 'Última actualización: 2022-12-01',
        icon: <CalendarIcon/>
    },
    {
        title: 'Idioma soportado: Español',
        icon: <CommentIcon/>
    },
    {
        title: 'Lenguaje: Python',
        icon: <TagIcon/>
    },
    {
        title: 'Universidad: Pontificia Universidad Javeriana, Bogotá',
        icon: <EducationIcon/>
    },
]

export function Header() {
    return (
        <header className="[grid-area:header] min-h-[300px] flex justify-between items-center px-12 gap-4 py-6">
            <div className="max-w-xl">
                <span className="flex items-center gap-2 text-blue-200">
                    <ClockIcon/>
                    <h2 className="font-medium text-2xl">Clasificacion de Recursos Bibliograficos</h2>
                </span>

                <span className="flex gap-4 my-3">
                    <label className="flex items-center gap-2 px-2 py-1 rounded-sm bg-[#C1CAD2]"><InfoIcon/> Hecho con IA</label>
                    <label className="flex items-center gap-2 px-2 py-1 rounded-sm bg-[#C1CAD2]"><StackIcon/> K-means</label>
                </span>

                <p>Modelo de clusterización para la gestión eficiente de recursos bibliográficos y optimización de procesos académicos y organizativos en la Biblioteca Alfonso Borrero Cabal, con énfasis en las asignaturas de la Facultad de Comunicación y Lenguaje y la Facultad de Ingeniería de la Pontificia Universidad Javeriana.</p>
            </div>

            <ul className="rounded-md bg-white border border-neutral-200 flex h-fit flex-col gap-3 p-4">
                {
                    list.map(({title, icon}) => (
                        <li className="flex items-center gap-3" key={title}>{icon} {title}</li>
                    ))
                }
            </ul>
        </header>
    )
}