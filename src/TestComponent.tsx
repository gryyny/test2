import { useWeb3Modal } from '@web3modal/wagmi/react'
import { FunctionComponent, useEffect} from "react";
import contractABI from './ABIs';
import { useAccount} from "wagmi";
import { readContract } from '@wagmi/core'
import { useContractRead } from 'wagmi'
interface TestComponentProps {
    
}
 
const TestComponent: FunctionComponent<TestComponentProps> = () => {
    const { open } = useWeb3Modal()

    const { address } = useAccount()
    const wagmiABI = [{
        "inputs": [],
        "name": "getHunger",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }]
    const { data , isSuccess } = useContractRead({
        address: '0xeCB504D39723b0be0e3a9Aa33D646642D1051EE1',
        abi: wagmiABI,
        functionName: 'getHunger',
        onSuccess(data) {
            console.log('Success', data)
        },
        onError(error) {
            console.log('Error', error)
        },
    })
   

    useEffect(() => {
        console.log(data)
    }, [data,isSuccess]);

    
    async function getUserData(){
            const tdata = await readContract({
                address: '0xeCB504D39723b0be0e3a9Aa33D646642D1051EE1',
                abi: wagmiABI,
                functionName: 'getHunger'
            })
            console.log(tdata)  
    } 
       

    return ( 
        <div className="App">
          <p onClick={() => open()}>Connect</p>
          <br />
          <p>{address}</p>
          <br />
          <div onClick={() => getUserData()}> <h2>get data</h2></div>
        </div>
     );
}
export default TestComponent;