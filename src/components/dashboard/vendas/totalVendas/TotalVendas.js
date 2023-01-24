import React from 'react'
import './TotalVendas.css'

export default function TotalVendas(props) {
  return (
    <>
        <table>
            <tbody>

                <tr>
                    <th>
                        Total de vendas
                    </th>
                </tr>
                <tr>
                    <td>
                        {props.totalVendas}
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  )
}
