import { LuMusic2, LuMusic3 } from 'react-icons/lu';
import { TfiMusicAlt } from 'react-icons/tfi';
import { PiMusicNoteLight } from 'react-icons/pi';
import { WiCloudDown } from 'react-icons/wi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { GrAnalytics } from 'react-icons/gr';
import Button from '../../components/Button';

export default function HomeIcons() {
	return (
		<div className='animate-pulse relative md:left-20 lg:left-10'>
			<div>
				<TfiMusicAlt className='text-4xl relative right-20 top-10 -rotate-45' />
				<PiMusicNoteLight className='text-4xl relative -left-9 bottom-10 -rotate-45' />
				<LuMusic2 className='text-2xl relative bottom-24 -rotate-45' />

				<LuMusic3 className='text-6xl relative -left-24 top-5 -rotate-45' />
				<PiMusicNoteLight className='text-6xl relative -top-[90px] right-8 rotate-12' />
				<TfiMusicAlt className='text-6xl relative bottom-44 -right-14 rotate-12' />

				<PiMusicNoteLight className='text-6xl relative -top-20 -left-24 rotate-12' />
				<LuMusic3 className='text-4xl relative bottom-36 rotate-12' />
				<TfiMusicAlt className='text-3xl relative bottom-44 -right-20 rotate-12' />
			</div>
			<div>
				<Button
					ButtonIcon={WiCloudDown}
					buttonName={'Download CSV'}
					iconClassName='text-3xl'
					buttonClassName={'relative bottom-[440px] right-[230px]'}
				/>
				<Button
					ButtonIcon={GrAnalytics}
					buttonName={'Visualize your music'}
					iconClassName='text-2xl'
					buttonClassName={'relative bottom-[330px] -right-[10px]'}
				/>
				<Button
					ButtonIcon={TbBrandGoogleAnalytics}
					buttonName={'Analyse your music'}
					iconClassName='text-2xl'
					buttonClassName={
						'md:relative bottom-[200px] right-[135px] lg:right-[200px]'
					}
				/>
			</div>
		</div>
	);
}
