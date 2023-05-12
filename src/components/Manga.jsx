import { Link as Anchor } from 'react-router-dom'

export default function MangaComponent({ readClick, manga }) {

  let author_name = manga?.author_id.name
  let author_photo = manga?.author_id.photo
  let author_id = manga?.author_id._id
  let id = author_id
  let photo = manga?.cover_photo
  let title = manga?.title
  let desc = manga?.description
  let category = manga?.category_id.name

 

 

  return (
    <>
      <section className="bg-black h-[115vh] md:h-[110vh] flex justify-evenly items-center animate__animated animate__fadeIn md:w-full">
        <div className="z-0 md:h-[50%] md:w-[50%] md:rounded-full md:bg-gradient-to-r from-[#121226] to-[#0b094a] blur-[115px] absolute right-0 "></div>
        <div className="w-[90%] md:h-full h-[screen] flex-col md:flex-row items-center flex md:justify-between md:items-center">
          <img className="object-cover w-[210px] sm:w-[300px] md:w-[350px] lg:w-[452px] xl:w-[602px] xl:h-[736px] rounded-xl " src={photo} alt="" />
          <div className="w-[100%] md:w-[300px] lg:w-[400px] xl:w-[500px] h-[500px] md:h-[400px] z-20 flex flex-col text-white justify-evenly">
            <div className="flex justify-around items-center">
              <h3 className="w-[50%] items-center opacity-40">{category}</h3>
              <div className="flex w-[50%] md:w-[50%] lg:w-[30%] justify-evenly items-center">
                <img className="w-[45px] h-[45px] rounded-[100%]" src={author_photo} alt="" />
                <Anchor to={`/authors/${id}`} >{author_name}</Anchor>
              </div>
            </div>
            <h1 className="text-[48px]">{title}</h1>
            <p>{desc}</p>
            <button onClick={readClick} className="h-[57px] bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-md">Read Now</button>
          </div>
        </div>
      </section>
    </>
  )
}