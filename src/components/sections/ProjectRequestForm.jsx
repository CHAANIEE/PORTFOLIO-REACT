import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialForm = {
  service: "",
  timeframe: "",
  name: "",
  email: "",
  message: "",
};

function ProjectRequestForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const totalSteps = 4;

  const update = (field, value) => setForm({ ...form, [field]: value });

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: wire to Formspree / EmailJS / your backend
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="form-success"
        >
          <h2>That was beautiful.</h2>
          <p>I'll be in touch soon.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <h2>Project Request</h2>
      <p>Tell me a bit about what you need — takes less than a minute.</p>

      <div className="form-progress">{step} / {totalSteps}</div>

      <form onSubmit={handleSubmit} className="multistep-form">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <label>What do you need?</label>
              <div className="option-group">
                {["Website Build", "Feature/Bugfix", "Full App", "Other"].map(
                  (opt) => (
                    <button
                      type="button"
                      key={opt}
                      className={form.service === opt ? "option active" : "option"}
                      onClick={() => update("service", opt)}
                    >
                      {opt}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <label>Desired timeframe?</label>
              <div className="option-group">
                {["ASAP", "1-2 weeks", "1 month+", "Flexible"].map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    className={form.timeframe === opt ? "option active" : "option"}
                    onClick={() => update("timeframe", opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <label>Tell me about the project</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Project scope & description"
                required
              />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <label>How can I reach you?</label>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="form-nav">
          {step > 1 && (
            <button type="button" onClick={back} className="btn-secondary">
              ← Back
            </button>
          )}
          {step < totalSteps ? (
            <button type="button" onClick={next} className="btn-primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Request"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default ProjectRequestForm;