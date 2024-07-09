'use client'
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [ img , setImg ] = useState([
    { src: "https://imgurl.ir/uploads/b88842_cold.jpg" , title:'Cold' , link:'/Cold' , id:1 },
    { src: "https://imgurl.ir/uploads/m02123_Rianyjpg.jpg" , title:'Rainy' , link:'/Rainy' , id:3 },
    { src: "https://imgurl.ir/uploads/155557_Sw.jpg" , title:'Snowy' , link:'/Snow' , id:4 }
  ])


  return (
    <main className="realcon flex flex-col justify-center items-center">

      <div className="header h-[20rem] w-full flex justify-center rounded-b-[400px]">
          <div className="flex flex-col items-center">
              <ul className="container-home flex justify-center items-center gap-10 text-white w-[50%] py-4 rounded-b-xl">
                  <Link href='/Rainy'><li className="border-b-[1px] border-b-blue-500">Rainy</li></Link>
                  <Link href='/Snow'><li className="border-b-[1px] border-b-blue-500">Sknow</li></Link>
                  <Link href='/Cold'><li className="border-b-[1px] border-b-blue-500">Cold</li></Link>
              </ul>
              <div className="title flex flex-col justify-center items-center mt-[3rem] text-[80px] text-white">
                  Weather of Iran
                  <p className="text-xl">You can find your best destination to travel in Iran in Winter</p>
              </div>
          </div>
      </div>


      <div className="banner w-full h-screen flex justify-center items-center">
        <div className="container-home w-[80%] flex justify-between items-center py-20 rounded-xl px-10 gap-7">
          
          <div className="explain w-[60%] text-white">
            <div className="title text-3xl font-bold mb-5">
              Greate Weathers
            </div>
            <div className="paragraf">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus cupiditate tempora dolor delectus tempore rem facere officiis a possimus, asperiores fuga similique inventore quasi repudiandae maxime, aut veniam beatae.
              Necessitatibus, repudiandae similique.
            </div>
          </div>
          
          <div className="imges w-[40%] flex flex-col justify-center items-center gap-5">
            {img.map((item) => {
              return(
                <div key={item.id} className="con-destination rounded-xl w-[70%] flex justify-center items-center flex-col">
                  <h1>{item.title}</h1>
                  <div className="con-img rounded-xl w-full flex justify-center items-center flex-col">
                    <Link className="flex justify-center items-center w-full" href={item.link}>
                      <img className="image w-full h-[4rem] rounded-xl"  src={item.src}/>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>


    </main>
  );
}
