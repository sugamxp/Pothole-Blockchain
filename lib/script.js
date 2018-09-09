
/**
 @param {org.test.pothole.PotholeSent} potholeSent
 @transaction
 */
async function pothole(potholeSent) { 
     const pothole = potholeSent.pothole;
     console.log('Received at: ' + potholeSent.timestamp);
     
     pothole.status = 'IN_PROCESS';
     console.log('Status: ' + pothole.status);
     console.log('height of Pothole: ' + pothole.height);
     console.log('width of Pothole: ' + pothole.width);
     console.log('Depth of Pothole: ' + pothole.depth);
    const potholeRegistry = await getAssetRegistry('org.test.pothole.Pothole');
    await potholeRegistry.update(pothole);
}
