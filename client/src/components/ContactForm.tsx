import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/routes";
import { useCreateMessage } from "@/hooks/use-messages";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const { mutate, isPending } = useCreateMessage();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card p-8 rounded-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-32 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <h3 className="text-2xl font-bold font-display mb-6 text-white">Send Message</h3>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
        <div className="space-y-2">
          <label className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Name</label>
          <input
            {...form.register("name")}
            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20 text-white"
            placeholder="Your name"
          />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Email</label>
          <input
            {...form.register("email")}
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20 text-white"
            placeholder="your@email.com"
          />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Message</label>
          <textarea
            {...form.register("message")}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20 text-white resize-none"
            placeholder="Tell me about your project..."
          />
          {form.formState.errors.message && (
            <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 rounded-lg font-bold uppercase tracking-widest text-sm bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
