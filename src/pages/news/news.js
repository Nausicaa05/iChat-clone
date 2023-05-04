import React from 'react'
import News_card from '../../components/news_card'

function news() {
  return (
    <div>
        <p className='pt-4 pl-8 text-2xl font-semibold'>
            News Room
        </p>
        <div className='p-4 flex w-screen justify-center'>
            <div className='max-w-xl'>
                <News_card img={"https://openaicom.imgix.net/243b509f-9d19-438e-a2ce-05e9ea5086a9/gpt-4.png?fm=auto&amp;auto=compress,format&amp;fit=min&amp;rect=0,0,2048,2048&amp;w=500&amp;h=500"} title={"decouvrez"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandaedolores, possimus pariatur animi temporibus nesciunt praesentium doloresed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,voluptates neque explicabo tempora nisi culpa eius atque dignissimos.Molestias explicabo corporis voluptatem?"}/>
            </div>
        </div>
    </div>
  )
}

export default news