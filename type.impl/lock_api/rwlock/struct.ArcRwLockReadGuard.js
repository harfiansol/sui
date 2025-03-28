(function() {
    var type_impls = Object.fromEntries([["sui_storage",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArcRwLockReadGuard%3CR,+T%3E\" class=\"impl\"><a href=\"#impl-ArcRwLockReadGuard%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; ArcRwLockReadGuard&lt;R, T&gt;<div class=\"where\">where\n    R: RawRwLock,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.rwlock\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">rwlock</a>(s: &amp;ArcRwLockReadGuard&lt;R, T&gt;) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;RwLock&lt;R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a reference to the rwlock, contained in its <code>Arc</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocked\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">unlocked</a>&lt;F, U&gt;(s: &amp;mut ArcRwLockReadGuard&lt;R, T&gt;, f: F) -&gt; U<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; U,</div></h4></section></summary><div class=\"docblock\"><p>Temporarily unlocks the <code>RwLock</code> to execute the given function.</p>\n<p>This is functionally identical to the <code>unlocked</code> method on [<code>RwLockReadGuard</code>].</p>\n</div></details></div></details>",0,"sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArcRwLockReadGuard%3CR,+T%3E\" class=\"impl\"><a href=\"#impl-ArcRwLockReadGuard%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; ArcRwLockReadGuard&lt;R, T&gt;<div class=\"where\">where\n    R: RawRwLockFair,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlock_fair\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">unlock_fair</a>(s: ArcRwLockReadGuard&lt;R, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Unlocks the <code>RwLock</code> using a fair unlock protocol.</p>\n<p>This is functionally identical to the <code>unlock_fair</code> method on [<code>RwLockReadGuard</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocked_fair\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">unlocked_fair</a>&lt;F, U&gt;(s: &amp;mut ArcRwLockReadGuard&lt;R, T&gt;, f: F) -&gt; U<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; U,</div></h4></section></summary><div class=\"docblock\"><p>Temporarily unlocks the <code>RwLock</code> to execute the given function.</p>\n<p>This is functionally identical to the <code>unlocked_fair</code> method on [<code>RwLockReadGuard</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bump\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">bump</a>(s: &amp;mut ArcRwLockReadGuard&lt;R, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Temporarily yields the <code>RwLock</code> to a waiting thread if there is one.</p>\n<p>This is functionally identical to the <code>bump</code> method on [<code>RwLockReadGuard</code>].</p>\n</div></details></div></details>",0,"sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ArcRwLockReadGuard%3CR,+T%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ArcRwLockReadGuard%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for ArcRwLockReadGuard&lt;R, T&gt;<div class=\"where\">where\n    R: RawRwLock,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-ArcRwLockReadGuard%3CR,+T%3E\" class=\"impl\"><a href=\"#impl-Deref-for-ArcRwLockReadGuard%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for ArcRwLockReadGuard&lt;R, T&gt;<div class=\"where\">where\n    R: RawRwLock,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ArcRwLockReadGuard%3CR,+T%3E\" class=\"impl\"><a href=\"#impl-Display-for-ArcRwLockReadGuard%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for ArcRwLockReadGuard&lt;R, T&gt;<div class=\"where\">where\n    R: RawRwLock,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-ArcRwLockReadGuard%3CR,+T%3E\" class=\"impl\"><a href=\"#impl-Drop-for-ArcRwLockReadGuard%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for ArcRwLockReadGuard&lt;R, T&gt;<div class=\"where\">where\n    R: RawRwLock,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","sui_storage::mutex_table::RwLockGuard"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10841]}