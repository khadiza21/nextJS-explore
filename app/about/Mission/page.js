import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import sunflower from "@/public/images/sunflower.png"

export default function Mission() {
  return (
     <main className="mt-10">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi fugit itaque delectus ipsum id amet voluptatem hic
                repellat, error corporis asperiores est perspiciatis tempora
                consequatur cupiditate soluta aperiam eos voluptates.
            </div>

            <div className="w-[320px]">
                <Image placeholder="blur" src={sunflower} alt="Sun Flower Image" />
            </div>

            <Button />
        </main>
  )
}
