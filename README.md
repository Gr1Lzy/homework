## Run the container

To start container, run the following command:

```bash
docker run -d -p 80:80 --memory=512m --cpus=1 my_node_app
```

CPU limit set to 1 because nodejs is single threaded and even more threads will be redundant

## Build the container

To start container, run the following command:

```bash
docker build --tags my_node_app .
```
