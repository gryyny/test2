import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { bscTestnet , mainnet } from 'wagmi/chains'
import TestComponent from './TestComponent'
import './App.css'
// 1. Get projectId
const projectId = '051d81b0a1340bf417f14f3c0b135e00'

// 2. Create wagmiConfig
const metadata = {
  name: 'CriptoMine',
  description: 'CriptoMine Example',
  url: 'https://d121779.hostde25.fornex.host/',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [bscTestnet,mainnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <TestComponent/>
    </WagmiConfig>
  )
}