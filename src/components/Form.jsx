export function Form() {
    return (
        <form className="h-full grid grid-rows-5 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] mt-8">
            <Input label='Cantidad de Ocurrencias'/>
            <Input label='Cantidad Veces Prestado'/>
            <Input label='Recencia Prestamo'/>
            <Input label='Año'/>
            <Input label='Ubicación'/>
            <Input label='Editor'/>
            <Input label='Programa Mas Frecuente'/>
            <Input label='Perfil Mas Frecuente'/>
            <Input label='Facultad'/>
        </form>
    )
}

function Input({placeholder, label, type = 'text', required = false}) {
    return (
        <label className="flex flex-col gap-1 md:max-w-[250px] text-blue-100">
            {label}
            <input type={type} placeholder={placeholder} required={required}
            className="px-2 py-1 border-blue-100/20 border-2 outline-none focus:border-blue-100/70 rounded-md text-black"
            />
        </label>
    )
}