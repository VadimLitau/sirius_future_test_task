import style from "./Banner.module.scss";

interface IBanner {
	title: string;
	subtitle: string;
	image: string;
	backgroundColor: string;
}

export function Banner({ title, subtitle, image, backgroundColor }: IBanner) {
	return (
		<div
			className={style.bannerWrap}
			style={{
				backgroundColor: `${backgroundColor}`,
				backgroundImage: `url(${image})`,
			}}
		>
			<span>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</span>
		</div>
	);
}
