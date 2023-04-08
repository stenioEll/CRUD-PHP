export default function Titulo(props) {
    return (
        <>
            <div className="flex justify-center">
                <h1 className="px-5 py-2 text-2xl text-gray-700">
                    {props.titulo}
                </h1>
            </div>
            <div>
                <hr className="border-1 border-gray-100 mb-4"/> 
            </div>
        </>
    )
}