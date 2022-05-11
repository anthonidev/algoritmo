import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Item from '../components/Item';
import { alphabets } from '../utils/data';
import { cifrar, getMatrix } from '../utils/helper';
import { ICifra } from '../utils/types';

const Home: NextPage = () => {
  const [matrix, setMatrix] = useState<string[][]>(getMatrix)
  const [formData, setFormData] = useState<ICifra>({
    text_plano: 'UTP',
    clave: 'SOL',
    
  })

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    // const item = e.currentTarget.classList
    // const esValido = e.currentTarget.validity.valid

    // if (esValido) {
    //   item.replace("border-gray-300", "border-green-300")
    //   item.replace("border-red-300", "border-green-300")
    // } else {
    //   item.replace("border-gray-300", "border-red-300")
    //   item.replace("border-green-300", "border-red-300")

    // }

  }
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    cifrar(formData.text_plano, formData.clave)


  };
  return (
    <div className="bg-gray-800 min-h-screen flex">
      <div>
        <div className="flex ml-16">
          {
            alphabets.map((item: any) => (

              <p key={item} className="mx-3 p-1 bg-teal-700 my-1 w-7 text-xs text-center text-white uppercase font-bold">{item}</p>

            ))
          }
        </div>
        <div className="flex">
          <div className="flex flex-col ml-3">
            {
              alphabets.map((item: any) => (

                <p key={item} className="mx-3 p-1 bg-teal-700 my-1 w-7 text-xs text-center text-white uppercase font-bold">{item}</p>

              ))
            }
          </div>
          <div>
            {
              matrix.map((item: any) => (

                <Item item={item} key={item} />

              ))
            }
          </div>
        </div>
      </div>
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

      </form>

    </div>
  )
}

export default Home
