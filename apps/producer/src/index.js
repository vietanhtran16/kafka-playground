import { Producer, KafkaClient, KeyedMessage } from "kafka-node";

const topic = "convos";
const client = new KafkaClient();
const producer = new Producer(client, { requireAcks: 1 });

producer.on("ready", () => {
  const keyedMessage = new KeyedMessage("keyed3", "yeah");

  producer.send([{ topic, messages: [keyedMessage] }], (err, result) => {
    console.log(err || result);
    process.exit();
  });
});

producer.on("error", (err) => {
  console.log("error", err);
});
