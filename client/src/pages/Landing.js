import React from "react";
import styles from "./Landing.module.css"; // Import styles
import { useEffect, useRef } from "react";
import Foodfacts from "../components/Foodfacts";
function Landing() {
    const infoSectionRef = useRef(null);

    return (
        <div id="pbin">
            <section className={styles.landingpic}>
                <div className={styles.container}>
                    <div className={styles.leftCol}>
                        <p className={styles.subHead}>
                            A UWCSEA East Initiative
                        </p>
                        <h1>Project Bin</h1>
                    </div>
                </div>
            </section>

            <section ref={infoSectionRef} className={styles.info}>
                <h1 className={styles.infoHeading}>Reducing Food Waste in Canteens</h1>
                <div className={styles.foodfactsGrid}>
                    <Foodfacts
                        name="Food Waste in Singapore"
                        text="Did you Know that there every day in Singapore, we throw away more than 2,000 tonnes? Globally over 1 billion tonnes of food is wasted."
                        colour="#E9F1E1"
                    ></Foodfacts>
                    <Foodfacts
                        name="Food Waste in Canteens"
                        text="Consumer Plate Waste accounts still for the majority of wastage: 89% in our School Community. Currently, targeted action is impossible as no one knows WHAT is being wasted."
                        colour="#E7E1F1"
                    ></Foodfacts>
                    <Foodfacts
                        name="A third box"
                        text="Some text."
                        colour="#E1FEEC"
                    ></Foodfacts>
                    <Foodfacts
                        name="The Solution"
                        text="Our Solution is to address this information gap between what is being wasted and those producing it by using AI Classification to recognise the food which is being wasted and feed this information back to Canteen staff."
                        colour="#E1F1EC"
                    ></Foodfacts>
                </div>
            </section>

        </div>
    );
}

export default Landing;
