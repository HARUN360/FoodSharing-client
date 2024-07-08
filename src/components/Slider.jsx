import Carousel from 'react-elastic-carousel';


const Slider = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];
    return (
       <div className='my-10'>
         <Carousel breakPoints={breakPoints}>
         <p className='mx-6'><img src="https://i.ibb.co/QMzXYqf/food1.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/DVwHZ6S/food2.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/wM7WtRp/food3.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/K0VYVt1/food4.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/tDCzj2c/food5.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/WGqr2TZ/food6.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/hf4R2FQ/food7.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/HYSS5HX/food8.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/wdydw8k/food9.jpg" alt="" /></p>   
        <p className='mx-6'><img src="https://i.ibb.co/B3gctk1/f2.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/1qBRxyD/f1.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/WGqr2TZ/food6.jpg" alt="" /></p>
        <p className='mx-6'><img src="https://i.ibb.co/hf4R2FQ/food7.jpg" alt="" /></p>
       
        {/* Add more items as needed */}
      </Carousel>
       </div>
    );
  };

export default Slider;