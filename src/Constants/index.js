import Londres from '../../assets/londres.jpg'
import Dubai from '../../assets/dubai.jpg'
import Atlantis from '../../assets/atlantis.jpg'
import Newyork from '../../assets/novayork.jpg'

const PacotesInternacionais = [
    {
        id: 1,
        nome: 'Londres',
        descricao: 'Conheça a capital do Reino Unido',
        foto: Londres,
        valor_dia: 700,
        qtd_dias: 7,
        desconto: 30,
    }
    ,
    {
        id: 2,
        nome: 'New York',
        descricao: 'Conheça a estátua da Liberdade',
        foto: Newyork,
        valor_dia: 750,
        qtd_dias: 5,
        desconto: 30,
    }
    ,
    {
        id: 3,
        nome: 'Dubai',
        descricao: 'A cidade mas rica dos EAU',
        foto: Dubai,
        valor_dia: 1800,
        qtd_dias: 4,
        desconto: 30,

    }
    ,
    {
        id: 4,
        nome: 'Atlantis',
        descricao: 'Uma experiência unica nas Bahamas',
        foto: Atlantis,
        valor_dia: 2500,
        qtd_dias: 6,
        desconto: 30,

    }
]

export default PacotesInternacionais;