# Ravn-Challenge-Django-Alexander
Ravn Django Code Challenge

![RavnChallenge](/gif/RavnChallenge.gif)

<!--img src="/gif/RavnChallenge.gif" width="250" height="250"/-->

### Technologies Used
#### Backend
* Python 3.8
* Django-rest 

#### Frontend
* JS React
* Bootstrap (reactstrap)
* [infinite scroll component](https://www.npmjs.com/package/react-infinite-scroll-component) 

### Setup/Running
1. Clone this repository
1. `docker-compose build`
1. `docker-compose up`
1. There should now be two servers running:
* http://127.0.0.1:8000 is the Django-rest server
* http://127.0.0.1:3000 is the React app

### Folder Structure

    ├── ...                             # django-rest files
            ├── swapi                   # StarWars API django-rest files
            ├── challenge               # django-rest files
            ├── frontend                # React files
            │   ├── src                
