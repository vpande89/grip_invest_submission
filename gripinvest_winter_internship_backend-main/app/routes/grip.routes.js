module.exports = app => {

  app.get("/api/products", (req, res) => {
    res.json([
      {
        id: "BOND-1",
        name: "Corporate Bond",
        annual_yield: 12.4,
        risk_level: "low",
        tenure_months: 12
      },
      {
        id: "MF-2",
        name: "High Yield Mutual Fund",
        annual_yield: 18.9,
        risk_level: "high",
        tenure_months: 24
      }
    ]);
  });

  app.post("/api/invest", (req, res) => {
    res.json({
      message: "Investment successful",
      expected_return: "₹12,400 in 12 months"
    });
  });

  app.get("/api/ai/portfolio", (req, res) => {
    res.json({
      summary: "Your portfolio is moderately risky and well diversified."
    });
  });

};
