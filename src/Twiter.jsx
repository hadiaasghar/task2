import React from 'react'

const Twiter = () => {
  return (
    <>
    <div className='bg-white w-full h-full'>
        
        <div className='w-[20vw] bg-white h-[100vh] rounded shadow-2xl shadow-slate-400 '> 
            <img src="data:image/png;base64,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" className='h-[10vh] ml-4'/>
            <div className='flex mt-3 ml-2'>
                <img src="data:image/png;base64,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" className='h-[4vh] ml-6 mt-3'/>
                <h3 className='text-black text-lg mt-3 ml-4 font-bold'>Home</h3>

            </div>

            <div className='flex mt-3 ml-2 '>
                <img src="https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/hashtag-icon.png" className='h-[4vh]  ml-6 mt-3'/>
                <h3 className='text-black text-lg mt-3 ml-4 font-bold'>Explore</h3>

            </div>
            <div className='flex mt-3 ml-2 '>
                <img src="https://icons.iconarchive.com/icons/steve/zondicons/256/Notifications-icon.png" className='h-[3vh]  ml-6 mt-3'/>
                <h3 className='text-black text-lg mt-3 ml-4 font-bold'>Notifications</h3>

            </div>
            <div className='flex mt-3 ml-2 '>
                <img src="https://icons.iconarchive.com/icons/icons8/ios7/256/Messaging-Message-icon.png" className='h-[4vh]  ml-6 mt-3'/>
                <h3 className='text-black text-lg mt-3 ml-4 font-bold'>Messages</h3>

            </div>

            <div className='flex mt-3 ml-1 '>
                <img src="https://icons.iconarchive.com/icons/github/octicons/256/bookmark-24-icon.png" className='h-[4vh]  ml-6 mt-3'/>
                <h3 className='text-black text-lg mt-3 ml-4 font-bold'>Bookmarks</h3>

            </div>
            <div className='flex mt-3 ml-2 '>
                <img src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Data-List-icon.png" className='h-[4vh]  ml-6 mt-3'/>
                <h3 className='text-black text-lg mt-3 ml-4 font-bold'>List</h3>

            </div>
            <div className='flex mt-3 ml-2 '>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/128/profile-icon.png" className='h-[4vh]  ml-6 mt-3'/>
                <h3 className='text-black text-lg mt-3 ml-4 font-bold'>Profile</h3>

            </div>
            <div className='flex mt-3 ml-2 '>
                <img src="https://icons.iconarchive.com/icons/colebemis/feather/256/more-horizontal-icon.png" className='h-[4vh]  ml-6 mt-3'/>
                <h3 className='text-black text-lg mt-3 ml-4 font-bold'>More</h3>

            </div>
            <button className='text-white rounded-full bg-[#1C9CEA] ml-5 mt-3 w-[15vw] h-[8vh]'>Tweet</button>







        </div>
      
    </div>
    </>
  )
}

export default Twiter
