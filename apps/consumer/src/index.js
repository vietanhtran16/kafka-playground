import { Consumer, KafkaClient } from "kafka-node";

const topic = "convos";
const client = new KafkaClient();
const topics = [{ topic }];
const options = { fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };

const consumer = new Consumer(client, topics, options);

consumer.on("message", (message) => {
  console.log(message);
});
