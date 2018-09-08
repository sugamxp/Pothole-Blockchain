/**
 * New script file
 */
/**
 @param {org.acme.cycle.pothole.PotholeReceived} potholeRecieved 
 @transaction
 */
async function pothole(potholeReceived) { 
     const contract = potholeReceived.pothole.contract;
     const pothole = potholeReceived.pothole;
     console.log('Received at: ' + potholeReceived.timestamp);
     
     pothole.status = 'IN_PROCESS';
     console.log('Status: ' + pothole.status);
     console.log('height of Pothole: ' + pothole.height);
     console.log('width of Pothole: ' + pothole.width);
    const potholeRegistry = await getAssetRegistry('org.acme.cycle.pothole.Pothole');
    await	potholeRegistry.update(pothole);
}