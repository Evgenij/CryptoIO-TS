import React, { useState } from "react";
import Button from "../../components/ui/Button/Button";
import { Link } from "react-router-dom";
import { MINING_AREA_ROUTE, SHOP_ROUTE } from "../../constants/routes";
import styles from "./Menu.module.scss";
import IMAGES from "../../images/images";
import ComponentDisplay from "../../components/ComponentDisplay/ComponentDisplay.jsx";

const Menu = () => {
	const [modal, setModal] = useState(false);

	return (
		<main className={[styles.menu, "flex h-full"].join(" ")}>
			<div className="background relative w-1/2">
				<img
					className={[styles.rig, "absolute"].join(" ")}
					src={IMAGES.RIGs.lvl4}
					alt={IMAGES.RIGs.lvl4}
				/>
				<img
					className={[styles.motherboard, "absolute"].join(" ")}
					src={IMAGES.motherboards.lvl3}
					alt={IMAGES.motherboards.lvl3}
				/>
				<img
					className={[styles.cpu, "absolute"].join(" ")}
					src={IMAGES.CPUs.lvl4}
					alt={IMAGES.CPUs.lvl4}
				/>
				<img
					className={[styles.cpuFAN, "absolute"].join(" ")}
					src={IMAGES.CPUsFANs.lvl4}
					alt={IMAGES.CPUsFANs.lvl4}
				/>
				<img
					className={[styles.ram, styles.first, "absolute"].join(" ")}
					src={IMAGES.RAMs.lvl3}
					alt={IMAGES.RAMs.lvl3}
				/>
				<img
					className={[styles.ram, styles.second, "absolute"].join(
						" "
					)}
					src={IMAGES.RAMs.lvl3}
					alt={IMAGES.RAMs.lvl3}
				/>
				<img
					className={[styles.gpu, "absolute"].join(" ")}
					src={IMAGES.GPUs.lvl3}
					alt={IMAGES.GPUs.lvl3}
				/>
				<img
					className={[styles.ssd, "absolute"].join(" ")}
					src={IMAGES.SSDs.lvl2}
					alt={IMAGES.SSDs.lvl2}
				/>
				<img
					className={[styles.power, "absolute"].join(" ")}
					src={IMAGES.PowerSupply.lvl4}
					alt={IMAGES.PowerSupply.lvl4}
				/>
			</div>
			<div className="menu flex flex-col space-y-3 items-center justify-center w-1/2 ">
				<Link to={MINING_AREA_ROUTE}>
					<Button color="green">New game</Button>
				</Link>
				{/* <Link to={SHOP_ROUTE}>
					<Button color="gray" onClick={()}>Shop</Button>
				</Link> */}
				{modal}
				<Button color="gray" onClick={() => setModal(!modal)}>
					Shop
				</Button>
			</div>
		</main>
	);
};

export default Menu;
