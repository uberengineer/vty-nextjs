import Image from 'next/image';

import styles from '../styles/Products.module.scss';

import product1 from '../public/assets/product1.png'
import product4 from '../public/assets/product4.png'
import product5 from '../public/assets/product5.png'
import product6 from '../public/assets/product6.png'
import product2 from '../public/assets/product2.jpg'
import product3 from '../public/assets/product3.jpg'


export default function Products() {
  return (
    <div className={styles.products} id="products">

      <div className={styles.products_images}>
        <a href="/assets/product1.png">
          <Image src={product1} alt="vty" />
        </a>
        <a href="/assets/product4.png">
          <Image src={product4} alt="vty" />
        </a>
        <a href="/assets/product5.png">
          <Image src={product5} alt="vty" />
        </a>
        <a href="/assets/product6.png">
          <Image src={product6} alt="vty" />
        </a>
      </div>

    </div>
  );
};