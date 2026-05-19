import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";

const router = express.Router();

const dataPath = path.join(process.cwd(), "data", "inventory.json");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

function readInventory() {
  const data = fs.readFileSync(dataPath, "utf-8");

  return JSON.parse(data);
}

function writeInventory(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

router.get("/inventory", (req, res) => {
  const inventory = readInventory();

  res.json(inventory);
});

router.get("/inventory/:id", (req, res) => {
  const inventory = readInventory();

  const item = inventory.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!item) {
    return res.status(404).json({
      message: "Inventory item not found",
    });
  }

  res.json(item);
});

router.post("/register", upload.single("photo"), (req, res) => {
  const inventory = readInventory();

  const { inventory_name, description } = req.body;

  if (!inventory_name) {
    return res.status(400).json({
      message: "Inventory name is required",
    });
  }

  const newItem = {
    id: Date.now(),
    inventory_name,
    description: description || "",
    photo: req.file ? req.file.filename : null,
  };

  inventory.push(newItem);

  writeInventory(inventory);

  res.status(201).json(newItem);
});

router.put("/inventory/:id", (req, res) => {
  const inventory = readInventory();

  const itemIndex = inventory.findIndex(
    (item) => item.id === Number(req.params.id)
  );

  if (itemIndex === -1) {
    return res.status(404).json({
      message: "Inventory item not found",
    });
  }

  inventory[itemIndex] = {
    ...inventory[itemIndex],
    inventory_name: req.body.inventory_name,
    description: req.body.description,
  };

  writeInventory(inventory);

  res.json(inventory[itemIndex]);
});

router.put(
  "/inventory/:id/photo",
  upload.single("photo"),
  (req, res) => {
    const inventory = readInventory();

    const itemIndex = inventory.findIndex(
      (item) => item.id === Number(req.params.id)
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        message: "Inventory item not found",
      });
    }

    inventory[itemIndex].photo = req.file.filename;

    writeInventory(inventory);

    res.json(inventory[itemIndex]);
  }
);

router.delete("/inventory/:id", (req, res) => {
  const inventory = readInventory();

  const filteredInventory = inventory.filter(
    (item) => item.id !== Number(req.params.id)
  );

  writeInventory(filteredInventory);

  res.json({
    message: "Inventory deleted successfully",
  });
});

export default router;