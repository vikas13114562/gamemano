import Image from 'next/image'
import ProductComponent from './component/product/productComponent'
import MainCard from './component/game-card/MainCard'
import { MainCardProps, allData } from './component/game-card/utils/allData'
export default function Home() {
  let data:MainCardProps = allData['1']
  return (
    <>
      <MainCard {...data} />
      <ProductComponent />
    </>
  )
}
