import { useState, useRef, useEffect } from "react";
import { animate } from "animejs";

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
  const stepRef = useRef(null);
  const totalSteps = 4;

  useEffect(() => {
    if (!stepRef.current) return;
    animate(stepRef.current, {
      opacity: [0, 1],
      translateX: [30, 0],
      duration: 350,
      ease: "outQuad",
    });
  }, [step]);

  const update = (field, value) => setForm({ ...form, [field]: value });
  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="contact">
        <div className="form-success">
          <h2>That was beautiful.</h2>
          <p>I'll be in touch soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <h2>Project Request</h2>
      <p>Tell me a bit about what you need — takes less than a minute.</p>

      <div className="form-progress">{step} / {totalSteps}</div>

      <form onSubmit={handleSubmit} className="multistep-form">
        <div ref={stepRef}>
          {step === 1 && (
            <>
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
            </>
          )}

          {step === 2 && (
            <>
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
            </>
          )}

          {step === 3 && (
            <>
              <label>Tell me about the project</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Project scope & description"
                required
              />
            </>
          )}

          {step === 4 && (
            <>
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
            </>
          )}
        </div>

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