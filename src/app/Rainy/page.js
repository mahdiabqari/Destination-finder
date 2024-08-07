'use client'
import Header from "@/component/header";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Rainy(){

    const [ change , setChange ] = useState(0)
    const [ changee , setChangee ] = useState(0)
    const [ firstdestination , setFirstdestination ] = useState([
        { 
          title: 'Shalman', 
          srcimg: 'https://imgurl.ir/uploads/x676187_Screenshot_61.png',
          id: 1, 
          explain: 'Shalman is one of the two cities in Komala District of Langrud County, Gilan Province. This city is located on the Rudsar-Langrud road, in the east of Gilan province. With a population of about 5,184 people, Shalman has many ancient and historical monuments.'
        },
    ])
    const [ nextdestination , setNextdestination ] = useState([
        { 
            title: 'Saary', 
            srcimg: 'https://imgurl.ir/uploads/t95093_2.jpg' ,
            id: 2, 
            explain: "Sari is one of the most populous and largest cities in the north of Iran. This city is the former capital of Iran and the center and only metropolis of Mazandaran province and Sari city. With a history of 6,000 years, Sari is also one of the oldest cities in Iran². "
        },
    ])

    useEffect(() => {
        const timer = setTimeout(() => {
          if (change == 0) {
            setFirstdestination([
                { 
                    title: 'Shalman', 
                    srcimg: 'https://imgurl.ir/uploads/x676187_Screenshot_61.png',
                    id: 1, 
                    explain: 'Shalman is one of the two cities in Komala District of Langrud County, Gilan Province. This city is located on the Rudsar-Langrud road, in the east of Gilan province. With a population of about 5,184 people, Shalman has many ancient and historical monuments. '
                },
            ]);
            setChange(1);
          } 
          else if(change == 1) {
            setFirstdestination([
                { 
                    title: 'Shalman', 
                    srcimg: 'https://imgurl.ir/uploads/t387919_Screenshot_62.png',
                    id: 1, 
                    explain: 'Shalman is one of the two cities in Komala District of Langrud County, Gilan Province. This city is located on the Rudsar-Langrud road, in the east of Gilan province. With a population of about 5,184 people, Shalman has many ancient and historical monuments. '
                },
            ]);
            setChange(2);
          }
          else if(change == 2) {
            setFirstdestination([
                { 
                    title: 'Shalman', 
                    srcimg: 'https://imgurl.ir/uploads/j78936_Screenshot_63.png',
                    id: 1, 
                    explain: 'Shalman is one of the two cities in Komala District of Langrud County, Gilan Province. This city is located on the Rudsar-Langrud road, in the east of Gilan province. With a population of about 5,184 people, Shalman has many ancient and historical monuments. '
                },
            ]);
            setChange(0);
          }
        }, 4500);
    
        return () => clearTimeout(timer);
      }, [change]);

    useEffect(() => {
    const timerr = setTimeout(() => {
        if (changee == 0) {
        setNextdestination([
            { 
                title: 'Saary', 
                srcimg: 'https://imgurl.ir/uploads/t95093_2.jpg',
                id: 1, 
                explain: "Sari is one of the most populous and largest cities in the north of Iran. This city is the former capital of Iran and the center and only metropolis of Mazandaran province and Sari city. With a history of 6,000 years, Sari is also one of the oldest cities in Iran². "
            },
        ]);
        setChangee(1);
        } 
        else if(changee == 1) {
        setNextdestination([
            { 
                title: 'Saary', 
                srcimg: 'https://imgurl.ir/uploads/w01017_9-copy.jpg',
                id: 1, 
                explain: "Sari is one of the most populous and largest cities in the north of Iran. This city is the former capital of Iran and the center and only metropolis of Mazandaran province and Sari city. With a history of 6,000 years, Sari is also one of the oldest cities in Iran². "
            },
        ]);
        setChangee(2);
        }
        else if(changee == 2) {
        setNextdestination([
            { 
                title: 'Saary', 
                srcimg: 'https://imgurl.ir/uploads/q9785_---7.jpg',
                id: 1, 
                explain: "Sari is one of the most populous and largest cities in the north of Iran. This city is the former capital of Iran and the center and only metropolis of Mazandaran province and Sari city. With a history of 6,000 years, Sari is also one of the oldest cities in Iran². "
            },
        ]);
        setChangee(0);
        }
    }, 5000);

    return () => clearTimeout(timerr);
    }, [changee]);




    return(
        <main className="realcon flex bg-blue-700">

            <div className="meno bg-black text-white flex flex-col justify-center items-center sticky top-0 w-[30%] h-[43rem] pt-10 mr-auto px-18 rounded-r-3xl">
                <div className="title flex justify-start items-start w-[90%] mb-4">
                    <h1 className="text-2xl">More Weathers</h1>
                </div>
                <div className="list flex justify-start items-start w-[90%] mb-7">
                    <ul className="flex justify-start items-start flex-col text-[18px]">
                        <Link href='/Cold'><li className="hover:border-none">- Cold</li></Link>    
                        <Link href='/Rainy'><li className="hover:border-none">- Rainy</li></Link> 
                        <Link href='/Snow'><li className="hover:border-none">- Snow</li></Link> 
                    </ul>
                </div>

                <div className="mn home flex flex-col justify-start items-start w-[90%] py-10">
                    <h1 className="text-2xl mb-4">Home</h1>
                    <Link href='/'>
                        <span className="text-[18px] cursor-pointer bg-white text-black p-1 rounded-sm hover:opacity-70">Back to home page</span>
                    </Link>
                </div>

                <div className="mn About flex flex-col justify-start items-start w-[90%] py-5">
                    <h1 className="text-2xl">More Template :</h1>
                    <span className="text-[18px] mx-auto">Mahdi abqari</span>
                    <div className="flex gap-7 justify-center items-center mt-4 mx-auto">
                        <img className="img-contact w-8 rounded-full" src="https://uploadkon.ir/uploads/779116_24telegram.jpg" border="0" alt="https://uploadkon.ir/uploads/779116_24telegram.jpg" />
                        <img className="img-contact w-8 rounded-full" src="https://uploadkon.ir/uploads/ae8216_24instagram.jpg" border="0" alt="https://uploadkon.ir/uploads/ae8216_24instagram.jpg" />
                        <img className="img-contact w-8 rounded-full" src="https://imgurl.ir/uploads/f085_mf6e1dnm_thumb.png" border="0" alt="f085_mf6e1dnm.png" />
                    </div>
                </div>

                <div className="mn acc flex flex-col justify-cneter items-cneter mx-auto w-[90%] py-10">
                    <h1 className="text-xl">You dont have any account?</h1>
                    <span className="text-[17px] mx-auto mt-2 cursor-pointer bg-gray-500 p-3 rounded-full hover:opacity-90">Sign in</span>
                </div>

            </div>

            <div className="container flex items-center flex-col pb-20">
                
                <div className="titr flex justify-center items-center rounded-xl flex-col mt-20 bg-black w-[80%] py-7">
                    <h1 className="text-white text-3xl">Rainy Destinations</h1>
                </div>

                {firstdestination.map((item) => {
                    return (
                        <div key={item.id} className="destination bg-black text-white w-[85%] mt-5 gap-10 px-10 py-16 rounded-xl">
                            <div className="top flex justify-center items-center gap-10">
                                <div className="left w-[60%]">
                                    <div className="title text-2xl font-bold mb-5">
                                        {item.title}
                                    </div>

                                    <div className="paragraf">
                                        {item.explain}
                                    </div>

                                </div>

                                <div className="right w-[40%]">
                                    <img className="img-view w-[30rem] rounded-xl" src={item.srcimg}/>
                                </div>
                            </div>
                            <div className="bottom flex justify-start items-start gap-5 mt-7">
                                <div className="flex justify-center items-center gap-2 bg-white text-black p-3 rounded-xl"> <h1 className="font-bold">Area:</h1>  <h1>13 km²</h1></div>
                                <div className="flex justify-center items-center gap-2 bg-white text-black p-3 rounded-xl"> <h1 className="font-bold">Population:</h1>  <h1>5,184 people</h1></div>
                            </div>
                        </div>
                    )
                })}

                {nextdestination.map((item) => {
                    return (
                        <div key={item.id} className="destination bg-black text-white w-[85%] mt-5 gap-10 px-10 py-16 rounded-xl">
                            <div className="top flex justify-center items-center gap-10">
                                <div className="left w-[60%]">
                                    <div className="title text-2xl font-bold mb-5">
                                        {item.title}
                                    </div>

                                    <div className="paragraf">
                                        {item.explain}
                                    </div>

                                </div>

                                <div className="right w-[40%]">
                                    <img className="img-view w-[30rem] rounded-xl" src={item.srcimg}/>
                                </div>
                            </div>

                            <div className="bottom flex justify-start items-start gap-5 mt-7">
                                <div className="flex justify-center items-center gap-2 bg-white text-black p-3 rounded-xl"> <h1 className="font-bold">Area:</h1>  <h1>54 km²</h1></div>
                                <div className="flex justify-center items-center gap-2 bg-white text-black p-3 rounded-xl"> <h1 className="font-bold">Population:</h1>  <h1>347402 people</h1></div>
                            </div>
                        </div>
                    ) 
                })}

            </div>
        </main>
    )
}