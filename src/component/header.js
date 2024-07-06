export default function Header(){
    return(
        <div className="header h-[20rem] w-full flex justify-center rounded-b-[400px]">
            <div className="container flex flex-col items-center">
                <ul className="flex justify-center items-center gap-10 text-white bg-blue-500 w-[40%] py-2 rounded-b-xl">
                    <li className="border-b-[1px] border-b-blue-500">Rainy</li>
                    <li className="border-b-[1px] border-b-blue-500">Sknow</li>
                    <li className="border-b-[1px] border-b-blue-500">Cold</li>
                </ul>
                <div className="title flex justify-center items-center mt-[6rem] text-[80px] text-white">
                    Weather of world
                </div>
            </div>
        </div>
    )
}