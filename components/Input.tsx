import { PhotographIcon, EmojiHappyIcon } from '@heroicons/react/outline'


export default function Input() {
  return (
    <div className='flex border-b p-4 space-x-3'>
        <img
            src="https://pbs.twimg.com/profile_images/1632973165470294018/H_bVDC_R_400x400.jpg"
            alt="userimg"
            className="h-11 w-11 rounded-full hover:brightness-95 mt-1">
        </img>
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-white tracking-wide min-h-[50px] text-white-700 bg-black" rows={2} placeholder="What's happening on SUI?"></textarea>
            </div>
            <div className='flex items-center justify-between pt-2.5'>
            <div className="flex">
                <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-blue-400"/>
                <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-blue-400"/>
            </div>
            <button className='bg-blue-400 px-4 py-1.5 rounded-full font-bold hover:brightness-95 disabled:opacity-50'>suiPost</button>
        </div>
        </div>
    </div>
  )
}
