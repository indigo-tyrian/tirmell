import Head from 'next/head'
import Image from 'next/image'
import { SceneWithSpinningBoxes } from '../src/components/babylon'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <SceneWithSpinningBoxes />
    </div>
  )
}
