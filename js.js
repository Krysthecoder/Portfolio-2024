function relocate_home()


function bouncingBall(initial, proportion) {
    let height= initial*proportion;
    let bounces=0;
    
    while (height>=0.56){
      //console.log('Bounce #', bounces, 'height ', height)
      height = height*proportion;
      bounces++;
    }
    return bounces;
  }
  
  
  function bouncingBall2(initial, proportion) {
    let bounces = 0;
    while(initial > 1){
        bounces++
      initial = initial * proportion
    }
    return bounces
  };
  
  const bouncingBall3 = (initial, proportion) => {
    let totalBounces = 0;
    while (initial > 1) {
      totalBounces++;
      initial *= proportion;
    }
    return totalBounces;
  }


  

bouncingBall2(2, 0.5)// 1
bouncingBall2(4, 0.5)// 2)
bouncingBall2(10, 0.1)// 1)
bouncingBall2(30, 0.3)// 3)