[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Meetsync

MeetSync is an application to help individuals, teams and organizaitons to sync themsleves based on people's availablities and make meeting and coordinating super easy. MeetSync hopes to provide a robust system to make meeting times easy with reminders to fill out the meetsync, calendar integrations and fast and responsive UI.

## Getting Started

### Prerequisites

Since the applciation has been containerized through docker-compose, you would need docker-compose.

### Installing & Running the Containers

To build the container(this is a one time build):

```
sudo docker-compose build
```

To run the container (everytime you want to start the application):

```
sudo docker-compose up
```

You can press ctrl/command + C on the terminal to stop the container.

### Accessing the Rails Container

To access the Rails Container(make sure the containers are already running):

```
sudo bash docker_shell.sh
```
If you want to access the rails console, then run the following command after the previous one:

```
rails c
```

### Accessing the Postgres Container

To access the Postgres Container(make sure the containers are already running):

```
sudo bash db_shell.sh
```

Then type:

```
psql project_matching_development projectmatch projectmatchpass
```

### Common Errors & FAQ

In case of a database not found or database not created error:

Access the Rails Container and run:

```
cd docker

bash db_setup.sh
```

If you want to reset the container and want to rebuild it, run:

```
sudo docker-compose down
```

and then rebuild it with docker-compose build

