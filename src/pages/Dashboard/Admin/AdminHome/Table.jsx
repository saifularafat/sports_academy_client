import { MdGolfCourse, MdOutlinePool, MdOutlineSportsHockey, MdSportsCricket, MdSportsTennis } from "react-icons/md";
import SportsIcon from "./SportsIcon";
import { BiFootball } from "react-icons/bi"
import { GiArcher, GiWaveSurfer } from "react-icons/gi"
import { FaBasketballBall } from "react-icons/fa";

const Table = () => {
    return (
        <table className="min-w-[800px] w-full text-secondary-content bg-neutral-focus">
            <thead className="border border-solid border-t border-slate-300 ">
                <th className="th__style">Icon</th>
                <th className="th__style">Coach N.</th>
                <th className="th__style">S. Name</th>
                <th className="th__style">Filed</th>
                <th className="th__style">Enroll</th>
                <th className="th__style">A. Set</th>
                <th className="normal-case py-4 md:px-[36px] px-6 text-xl font-medium">free</th>
            </thead>
            <tbody>
                <tr className="border border-solid border-b border-slate-300  font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={BiFootball} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Peterson</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Football</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Stadium</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">27</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">08</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$200</span></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={MdSportsCricket} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Tipo Sultan</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Cricket</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Stadium</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">25</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">10</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$120</span></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={MdOutlineSportsHockey} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Sakib All</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Hockey</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Stadium</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">15</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">15</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$320</span></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={GiArcher} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Merk Joker</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Archer</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">OutFiled</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">09</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">04</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$406</span></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={MdSportsTennis} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Rakib All</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Tennis</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Indoor</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">09</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">06</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$600</span></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={FaBasketballBall} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Jeson</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Basketball</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Indoor</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">12</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">14</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$330</span></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={GiWaveSurfer} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Tipo sultan</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Surfing</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">SeeBice</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">08</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">02</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$260</span></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={MdGolfCourse} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Islam</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Golf</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">GolfFiled</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">11</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">07</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$520</span></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-7"><SportsIcon Icons={MdOutlinePool} bgIcon="bg-slate-200" textColor="text-green-500" /></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Arafat</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">Pool</span></td>
                    <td className="py-3 px-5"><span className="text-lg font-normal ">Swimming</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">06</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-medium ">09</span></td>
                    <td className="py-3 px-7"><span className="text-lg font-normal ">$800</span></td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;