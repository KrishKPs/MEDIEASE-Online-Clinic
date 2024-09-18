const { Interaction } = require('./db');

async function druginteraction(req, res) {
    try {
        const drug = req.body;
        
        // Simplified query to check only one condition
        const interaction = await Interaction.findOne({
            drugA: drug.drugA.trim(),
            drugB: drug.drugB.trim()
        });
        console.log (drug.drugA.trim());
        console.log("Query result:", interaction);
        console.log(`Using collection: ${Interaction.collection.name}`);

        
        if (interaction.action == "increase" || interaction.action == "decrease") {
            res.json({
                interaction: "You can not take this medicine"
            });
        } else {
            res.json({ interaction: 'You can take this medicine' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = druginteraction;
