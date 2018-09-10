# Pothole-Blockchain

## Hyperledger Composer

Hyperledger Composer is a programming model containing a modeling language, and a set of APIs to quickly define and deploy business networks and applications that allow participants to send transactions that exchange assets


## Assets

Assets are tangible or intangible goods, services, or property, and are stored in registries.

## Participants

Participants are members of a business network. They may own assets and submit transactions.

## Transactions

Transactions are the mechanism by which participants interact with assets.

![Image](images/image.svg)

## Pothole-Example


This examples include the following components :

1. Participants
   1. Citizen
   2. Government 
   3. NGO

2. Assets
   1. Pothole-Info
s
3. Transactions
   1. PotholeSent
   2. PotholeFixed

### Working 
___
1. A citizen creates a pothole asset which will consist of its location, dimensions and present status of the pothole, intially the status is 'CREATED'.
2. Only the user can submit the pothole asset and its status is changed to 'IN_PROCESS', using the PotholeSent Transaction.
3. NGO's and Government can view all the assets and transaction on the network.
4. Once a pothole is fixed the Government submits the PotholeFixed trasaction with changes the status to 'FIXED'.
5. Rules for each participant are defined in the permissions.acl file with is written in Access Control Language.


















