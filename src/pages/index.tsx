import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Item from '../components/Item';
import { alphabets26, alphabets27 } from '../utils/data';
import { cifrar, getMatrix26, getMatrix27, } from '../utils/helper';
import { ICifra } from '../utils/types';

enum Modulo {
  M26 = "Modulo 26",
  M27 = "Modulo 27",
}

const Home: NextPage = () => {

  const [matrix, setMatrix] = useState<string[][]>(getMatrix27)
  const [modulo, setModulo] = useState<Modulo>(Modulo.M27)
  const [result, setResult] = useState<string>()
  const [alphabet, setAlphabet] = useState<string[]>(alphabets27)

  const [formData, setFormData] = useState<ICifra>({
    text_plano: 'UTP',
    clave: 'SOL',
  })
  useEffect(() => {
    if (modulo == "Modulo 27") {
      setMatrix(getMatrix27)
      setAlphabet(alphabets27)
    }
    else {
      setMatrix(getMatrix26)
      setAlphabet(alphabets26)
    }

  }, [setMatrix, modulo, setAlphabet])



  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  }
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setResult(cifrar(formData.text_plano, formData.clave, matrix,alphabet))

  };
  return (
    <div className="bg-gray-800 min-h-screen flex">
      <div>
        <div className="flex ml-16">

          {
            alphabet.map((item: any) => (

              <p key={item} className="mx-3 p-1 bg-teal-700 my-1 w-7 text-xs text-center text-white uppercase font-bold">{item}</p>

            ))
          }
        </div>
        <div className="flex">
          <div className="flex flex-col ml-3">
            {
              alphabet.map((item: any) => (

                <p key={item} className="mx-3 p-1 bg-teal-700 my-1 w-7 text-xs text-center text-white uppercase font-bold">{item}</p>

              ))
            }
          </div>
          <div>
            {
              matrix && matrix.map((item: any) => (

                <Item item={item} key={item} />

              ))
            }
          </div>
        </div>
      </div>
      <div>
        <select onChange={(e: any) => setModulo(e.target.value)} id='modulo'
          name='modulo'>
          <option value={Modulo.M27} >{Modulo.M27}</option>
          <option value={Modulo.M26} >{Modulo.M26}</option>
        </select>
        <form onSubmit={onSubmit} >

          <h1 className="text-lg text-white">Matriz de Vigeniere</h1>
          <div className="flex-col flex space-y-4">
            <input
              type="text"
              name='text_plano'
              onChange={onChange}
              value={formData.text_plano}
            />
            <input
              type="text"
              name='clave'
              onChange={onChange}
              value={formData.clave}
            />
          </div>
          <button type='submit'
            className="px-5 py-3 bg-teal-600 mt-4 hover:bg-teal-700 rounded-lg border border-teal-900 font-bold font-sans text-lg text-green-200  tracking-widest">
            Calcular
          </button>
          {result && (
            <div>
              <span className="text-xl text-white font-semibold uppercase">resultado: {result}</span>
            </div>
          )}


        </form>
      </div>


    </div>
  )
}

export default Home
