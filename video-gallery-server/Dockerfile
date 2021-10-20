FROM katalonstudio/katalon

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]
RUN apt-get -y update
RUN apt-get install -y ffmpeg
RUN apt install nodejs
RUN npm install --production=false --silent

COPY . .

CMD npm run dev

EXPOSE 8080