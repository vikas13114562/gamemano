import Image from "next/image";
import styles from "./Navigation.module.css";
const SideNavigation = () => {
  return (
    <div className={styles.sideNavContainer}>
      <div>
        <Image src="/side_logo.png" width={70} height={40} alt="side logo" />
      </div>
      <div className={styles.iconContainer}>
      <Image src="/home.svg" width={24} height={24} alt="home" />
      <Image src="/msg_box.svg" width={24} height={24} alt="msg box" />
      <Image src="/store.svg" width={24} height={24} alt="store" />
      <Image src="/payment.svg" width={24} height={24} alt="card" />
      <Image src="/app_store.svg" width={24} height={24} alt="app store" />
      <Image src="/trophy.svg" width={24} height={24} alt="trophy" />
      </div>
      <div className={styles.hrBorder}></div>
      <div className={styles.iconContainer}>
      <Image src="/setting.svg" width={24} height={24} alt="setting" />
      <Image src="/logout.svg" width={24} height={24} alt="logout" />
      </div>
    </div>
  );
};

export default SideNavigation;
