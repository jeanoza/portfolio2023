import Image from "next/image";
import { useEffect, useState } from "react";


interface IProps {
	photos: string[];
	name: string;
}
export default function ImageViewer({photos, name}:IProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isInitialRender, setIsInitialRender] = useState(true);

	useEffect(()=> {
		if (!isInitialRender) {
			document.getElementById(`${name}-${currentIndex}`)?.scrollIntoView({
				behavior: 'smooth', 
				block: 'nearest',   
				inline: 'nearest'   
			});
		}
	}, [currentIndex, isInitialRender, name])

	function handleOnMove(isNext: boolean) {
		const nextIndex = isNext
			? (currentIndex + 1) % photos.length
			: (currentIndex - 1) < 0 ? photos.length - 1 : currentIndex - 1;
		setIsInitialRender(false);
		setCurrentIndex(nextIndex);
	}
	function handleOnClickSmallImage(index: number) {
		setCurrentIndex(index);
	}
	return (
		<section className="mx-auto max-w-2xl mb-8 mt-4 rounded">
			<div className="shadow-2xl relative">
				<Image 
					className="w-full object-cover rounded h-96"
					src={`/images/project/${name}/${photos[currentIndex]}`}
					alt=""
					width={1600}
					height={900}
				/>
				<a
					className="absolute left-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"
					onClick={() => handleOnMove(false)}
				>❮</a>
				<a
					className="absolute right-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"
					onClick={() => handleOnMove(true)}
				>❯</a>
				<div className="text-center text-white font-light tracking-wider bg-gray-800 py-2">
					<p>{photos[currentIndex]}</p>
				</div>
				<div className="flex overflow-scroll gap-1 bg-gray-800">
					{photos.map((photo, index) => 
						<Image 
							id={`${name}-${index}`}
							key={`${name}-${photo}`}
							className={`description h-24 opacity-${currentIndex === index ? '100' : '50'} hover:opacity-100 cursor-pointer rounded-sm`}
							src={`/images/project/${name}/${photo}`}
							alt=""
							width={200}
							height={200}
							onClick={() => handleOnClickSmallImage(index)}
						/>
					)}
				</div>
			</div>
		</section>
	)
}