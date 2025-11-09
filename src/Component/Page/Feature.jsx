import { CiStar } from "react-icons/ci";
import Card from "./Card";

export default function Feature() {
  return (
    <div className='bg-[#e8ebe2] border border-b-black'>
        <div className="gap-5 flex flex-col">
            <h1 className='text-black flex justify-center items-center text-3xl mt-5  underline decoration-black decoration-2 underline-offset-4'>Feature Products</h1>     
        </div>


        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-10 ">
          <Card title='Nike' price='3500' model='This is most selling products' image="src/assets/background-remover/png-clipart-nike-free-air-force-nike-air-max-sneakers-men-shoes-white-outdoor-shoe.png" mainprice = '3800'></Card>
          <Card title= 'Puma' price= '4220' model='RS-X Hyper Prep Fall' image='src/assets/background-remover/running-shoes-sneakers-transparent-background_84443-4651.png' mainprice='4880' ></Card>
          <Card title='Adidas' price='2999' model='Adidas Ultraboost 22 Shoes' image='src/assets/background-remover/pngtree-white-sports-shoe-with-a-rugged-design-png-image_15815147.png' mainprice='3500'></Card>
          <Card title='Reebok' price='4500' model='Reebok Zig Kinetica II Shoes' image='src/assets/background-remover/white.png' mainprice='5000'></Card>
          <Card title='New Balance' price='3800' model='New Balance Fresh Foam X 1080v12' image='src/assets/background-remover/png-transparent-nike-free-nike-air-max-shoe-white-sportswear-nike-leather-grey-outdoor-shoe-thumbnail.png' mainprice='4200'></Card>
          <Card title='Asics' price='4100' model='Asics Gel-Kayano 28 Shoes' image='src/assets/background-remover/running-shoes-sneakers-transparent-background_84443-4651.png' mainprice='4600'></Card>
          <Card title='Nike' price='4200' model='Sealdine RX-9 cover' image='src/assets/background-remover/imgbin-nike-air-max-sneakers-air-jordan-shoe-nike-air-ALrpR62gyGx7Km4GjVBiwSaak_t.png' mainprice='5220' ></Card>
          <Card title='Nike' price='2800' model='Sealdine RX-6 cover' mainprice='3220' image='src/assets/background-remover/png-clipart-nike-air-max-sneakers-shoe-fashion-nike-white-fashion.png' ></Card>
        </div>
      

       </div>



  )
}
