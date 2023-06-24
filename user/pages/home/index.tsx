import { useEffect, useState } from 'react';
import s from './home.module.scss';
import Image from 'next/image'
import { productService } from 'src/services/product.service';

const HomePage = () => {
  const [avatar, setAvatar] = useState() as any;

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    }
  }, [avatar]);

  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0]

    file.preview = URL.createObjectURL(file);
    console.log('file.preview', file.preview);
    

    setAvatar(file);
  }

  useEffect(() => {
    const getBooks = async () => {
      const res = await productService.getProducts();
    }
    getBooks();
  }, []);

  return (
    <div className={s['home-page']}>
      <input type="file" onChange={(file) => handlePreviewAvatar(file)} />
      {avatar && (
        <Image src={avatar.preview} alt="" width={300} height={300} />
      )}
    </div>
  );
}

export default HomePage;